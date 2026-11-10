import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-destructive">
        SOMETHING WENT WRONG
      </p>

      <h1 className="mt-3 text-3xl font-bold">We couldn't load this page</h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        Something unexpected happened. Please try again.
      </p>

      {import.meta.env.DEV && (
        <pre className="mt-4 max-w-full overflow-auto text-left text-xs">
          {error?.message}
        </pre>
      )}

      <Link
        to="/"
        className="mt-6 rounded-lg bg-primary px-5 py-3 text-primary-foreground"
      >
        Back to home
      </Link>
    </main>
  );
}
