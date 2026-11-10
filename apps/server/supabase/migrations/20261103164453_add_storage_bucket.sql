-- ============================================================================
-- Storage: listing-images bucket
-- Path convention: listing-images/{listing_id}/{filename}
-- ============================================================================

insert into storage.buckets (id, name, public)
values ('listing-images', 'listing-images', true)
on conflict (id) do nothing;

-- Anyone can view images (bucket is public, but explicit policy for clarity
-- and in case public is ever toggled off).
create policy "Listing images are publicly viewable"
on storage.objects for select
using (bucket_id = 'listing-images');

-- Any authenticated user can upload, as long as the first path segment
-- (the listing_id folder) is a listing they actually own.
create policy "Owners can upload images for their own listings"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'listing-images'
  and exists (
    select 1 from listings
    where listings.id::text = (storage.foldername(name))[1]
    and listings.posted_by_id = auth.uid()
  )
);

create policy "Owners can update images for their own listings"
on storage.objects for update
to authenticated
using (
  bucket_id = 'listing-images'
  and exists (
    select 1 from listings
    where listings.id::text = (storage.foldername(name))[1]
    and listings.posted_by_id = auth.uid()
  )
);

create policy "Owners can delete images for their own listings"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'listing-images'
  and exists (
    select 1 from listings
    where listings.id::text = (storage.foldername(name))[1]
    and listings.posted_by_id = auth.uid()
  )
);