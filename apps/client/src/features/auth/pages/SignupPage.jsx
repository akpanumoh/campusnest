import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="text-3xl font-bold">Create your account</h1>

      <p className="mt-2 text-muted-foreground">
        Join CampusNest and discover student accommodation.
      </p>

      <Link className="mt-6 text-sm text-primary" to="/login">
        Already have an account? Log in
      </Link>
    </main>
  );
}
