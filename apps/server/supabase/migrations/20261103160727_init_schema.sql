-- ============================================================================
-- CampusNest: initial schema
-- profiles, listings, listing_images, roommate_posts,
-- conversations, conversation_participants, messages
-- ============================================================================

-- ----------------------------------------------------------------------------
-- profiles
-- One row per auth.users row. Created automatically via trigger below.
-- ----------------------------------------------------------------------------
create type dashboard_type as enum ('student', 'landlord');

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  default_dashboard dashboard_type not null default 'student',
  created_at timestamptz not null default now()
);

-- Auto-create a profile row whenever a new auth user signs up.
-- Expects first_name/last_name to be passed in signUp()'s options.data.
create function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, last_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'first_name', ''),
    coalesce(new.raw_user_meta_data->>'last_name', '')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- ----------------------------------------------------------------------------
-- listings
-- ----------------------------------------------------------------------------
create type room_type as enum ('self_contain', 'shared', 'hostel');
create type price_period as enum ('monthly', 'yearly');
create type listing_status as enum ('available', 'taken');

create table listings (
  id uuid primary key default gen_random_uuid(),
  posted_by_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  description text,
  price numeric(12, 2) not null,
  price_period price_period not null default 'yearly',
  location_text text not null,
  latitude double precision,
  longitude double precision,
  room_type room_type not null,
  -- Set when an agent posts on behalf of a landlord who isn't on the platform.
  owner_name text,
  owner_contact text,
  status listing_status not null default 'available',
  created_at timestamptz not null default now()
);

create index listings_posted_by_id_idx on listings(posted_by_id);
create index listings_status_idx on listings(status);

create table listing_images (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references listings(id) on delete cascade,
  image_url text not null,
  position smallint not null default 0
);

create index listing_images_listing_id_idx on listing_images(listing_id);

-- ----------------------------------------------------------------------------
-- roommate_posts
-- ----------------------------------------------------------------------------
create type roommate_post_type as enum ('have_spot', 'looking_for_spot');

create table roommate_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references profiles(id) on delete cascade,
  type roommate_post_type not null,
  listing_id uuid references listings(id) on delete set null,
  description text not null,
  created_at timestamptz not null default now()
);

create index roommate_posts_author_id_idx on roommate_posts(author_id);
create index roommate_posts_listing_id_idx on roommate_posts(listing_id);

-- ----------------------------------------------------------------------------
-- conversations / conversation_participants / messages
-- Every conversation is tied to exactly one listing OR one roommate_post.
-- ----------------------------------------------------------------------------
create table conversations (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references listings(id) on delete cascade,
  roommate_post_id uuid references roommate_posts(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint conversation_has_exactly_one_subject check (
    (listing_id is not null)::int + (roommate_post_id is not null)::int = 1
  )
);

create index conversations_listing_id_idx on conversations(listing_id);
create index conversations_roommate_post_id_idx on conversations(roommate_post_id);

create table conversation_participants (
  conversation_id uuid not null references conversations(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (conversation_id, user_id)
);

create index conversation_participants_user_id_idx on conversation_participants(user_id);

create table messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references conversations(id) on delete cascade,
  sender_id uuid not null references profiles(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create index messages_conversation_id_idx on messages(conversation_id);

-- ============================================================================
-- Row Level Security
-- ============================================================================

-- ---------------------------- profiles --------------------------------------
alter table profiles enable row level security;

create policy "Profiles are publicly viewable"
on profiles for select
using (true);

create policy "Users can update their own profile"
on profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

-- Insert happens via the handle_new_user trigger (security definer), so no
-- insert policy is needed for normal signups.

-- ---------------------------- listings ---------------------------------------
alter table listings enable row level security;

create policy "Listings are publicly viewable"
on listings for select
using (true);

create policy "Authenticated users can create listings"
on listings for insert
to authenticated
with check (auth.uid() = posted_by_id);

create policy "Owners can update their own listings"
on listings for update
using (auth.uid() = posted_by_id)
with check (auth.uid() = posted_by_id);

create policy "Owners can delete their own listings"
on listings for delete
using (auth.uid() = posted_by_id);

-- ------------------------- listing_images -------------------------------------
alter table listing_images enable row level security;

create policy "Listing images are publicly viewable"
on listing_images for select
using (true);

create policy "Listing owners can manage their listing images"
on listing_images for all
using (
  exists (
    select 1 from listings
    where listings.id = listing_images.listing_id
    and listings.posted_by_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from listings
    where listings.id = listing_images.listing_id
    and listings.posted_by_id = auth.uid()
  )
);

-- ------------------------- roommate_posts -------------------------------------
alter table roommate_posts enable row level security;

create policy "Roommate posts are publicly viewable"
on roommate_posts for select
using (true);

create policy "Authenticated users can create roommate posts"
on roommate_posts for insert
to authenticated
with check (auth.uid() = author_id);

create policy "Authors can update their own roommate posts"
on roommate_posts for update
using (auth.uid() = author_id)
with check (auth.uid() = author_id);

create policy "Authors can delete their own roommate posts"
on roommate_posts for delete
using (auth.uid() = author_id);

-- ------------------------- conversations ---------------------------------------
alter table conversations enable row level security;

create policy "Participants can view their conversations"
on conversations for select
using (
  exists (
    select 1 from conversation_participants
    where conversation_participants.conversation_id = conversations.id
    and conversation_participants.user_id = auth.uid()
  )
);

create policy "Authenticated users can start conversations"
on conversations for insert
to authenticated
with check (true);

-- --------------------- conversation_participants ---------------------------------
alter table conversation_participants enable row level security;

create policy "Participants can view their own conversation membership"
on conversation_participants for select
using (
  exists (
    select 1 from conversation_participants cp
    where cp.conversation_id = conversation_participants.conversation_id
    and cp.user_id = auth.uid()
  )
);

create policy "Authenticated users can add participants to conversations they start"
on conversation_participants for insert
to authenticated
with check (true);

-- ------------------------------ messages -----------------------------------------
alter table messages enable row level security;

create policy "Participants can view messages in their conversations"
on messages for select
using (
  exists (
    select 1 from conversation_participants
    where conversation_participants.conversation_id = messages.conversation_id
    and conversation_participants.user_id = auth.uid()
  )
);

create policy "Participants can send messages in their conversations"
on messages for insert
to authenticated
with check (
  auth.uid() = sender_id
  and exists (
    select 1 from conversation_participants
    where conversation_participants.conversation_id = messages.conversation_id
    and conversation_participants.user_id = auth.uid()
  )
);