import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="text-3xl font-bold">Welcome back</h1>

      <p className="mt-2 text-muted-foreground">
        Log in to continue to your CampusNest account.
      </p>

      <div className="mt-6 space-y-3">
        <Link className="block text-sm text-primary" to="/signup">
          Don't have an account? Sign up
        </Link>

        <Link className="block text-sm text-primary" to="/forgot-password">
          Forgot your password?
        </Link>
      </div>
    </main>
  );
}
