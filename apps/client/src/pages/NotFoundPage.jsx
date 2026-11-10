import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-primary">404 ERROR</p>

      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>

      <p className="mt-3 text-muted-foreground">
        Sorry, we couldn't find the page you're looking for.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-primary px-5 py-3 text-primary-foreground"
      >
        Back to home
      </Link>
    </main>
  );
}
