import { Link } from "react-router-dom";

export default function ConfirmEmailPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12 text-center">
      <h1 className="text-3xl font-bold">Check your email</h1>

      <p className="mt-3 text-muted-foreground">
        We've sent you a confirmation link. Open your email to verify your
        account.
      </p>

      <Link className="mt-6 text-sm text-primary" to="/login">
        Back to login
      </Link>
    </main>
  );
}
