import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="text-3xl font-bold">Forgot your password?</h1>

      <p className="mt-2 text-muted-foreground">
        Enter your email to receive instructions to reset your password.
      </p>

      <Link className="mt-6 text-sm text-primary" to="/login">
        Back to login
      </Link>
    </main>
  );
}
