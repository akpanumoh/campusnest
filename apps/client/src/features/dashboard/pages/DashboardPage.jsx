export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Your dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your profile, accommodation listings and roommate posts.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="font-semibold">My listings</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your accommodation posts.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="font-semibold">My roommate posts</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your roommate posts.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="font-semibold">Profile settings</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Update your personal information.
          </p>
        </div>
      </div>
    </div>
  );
}
