import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  MessageCircle,
  Plus,
  ChevronDown,
  Menu,
  X,
  UserRound,
  LogOut,
} from "lucide-react";

// Replace this with your actual auth context import.
import { useAuth } from "../../features/auth/components/AuthProvider";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-muted-foreground"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);

  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-primary"
        >
          CampusNest
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/listings" className={navLinkClass}>
            Browse listings
          </NavLink>

          <NavLink to="/roommates" className={navLinkClass}>
            Roommates
          </NavLink>

          {user && (
            <NavLink to="/messages" className={navLinkClass}>
              Messages
            </NavLink>
          )}

          {/* Post dropdown */}
          {user && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setPostOpen(!postOpen)}
                className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Plus size={17} />
                Post
                <ChevronDown size={15} />
              </button>

              {postOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-card p-2 shadow-lg">
                  <button
                    onClick={() => {
                      navigate("/listings/new");
                      setPostOpen(false);
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-muted"
                  >
                    New accommodation listing
                  </button>

                  <button
                    onClick={() => {
                      navigate("/roommates/new");
                      setPostOpen(false);
                    }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-muted"
                  >
                    New roommate post
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop account actions */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <UserRound size={18} />
                My account
              </Link>

              <button
                onClick={handleSignOut}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                title="Log out"
                aria-label="Log out"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-muted md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              to="/listings"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
            >
              <Home size={19} />
              Browse listings
            </Link>

            <Link
              to="/roommates"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
            >
              <Users size={19} />
              Roommates
            </Link>

            {user ? (
              <>
                <Link
                  to="/messages"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                >
                  <MessageCircle size={19} />
                  Messages
                </Link>

                <div className="my-2 border-t" />

                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Create a post
                </p>

                <Link
                  to="/listings/new"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
                >
                  New accommodation listing
                </Link>

                <Link
                  to="/roommates/new"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
                >
                  New roommate post
                </Link>

                <div className="my-2 border-t" />

                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                >
                  <UserRound size={19} />
                  My account
                </Link>

                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-destructive hover:bg-muted"
                >
                  <LogOut size={19} />
                  Log out
                </button>
              </>
            ) : (
              <div className="mt-3 grid grid-cols-2 gap-3 border-t pt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border px-4 py-3 text-center text-sm font-semibold"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
