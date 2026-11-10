import { Link } from "react-router-dom";
import { Home, Users, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hidden border-t bg-card md:block">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-primary"
            >
              CampusNest
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Find your next student home and connect with people who make
              campus life feel like home.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-foreground">Explore</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/listings" className="hover:text-primary">
                  Browse listings
                </Link>
              </li>

              <li>
                <Link to="/roommates" className="hover:text-primary">
                  Find roommates
                </Link>
              </li>

              <li>
                <Link to="/listings/new" className="hover:text-primary">
                  Post accommodation
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-foreground">Your account</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/login" className="hover:text-primary">
                  Log in
                </Link>
              </li>

              <li>
                <Link to="/signup" className="hover:text-primary">
                  Create an account
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/messages" className="hover:text-primary">
                  Messages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground">Get in touch</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>Contact support</span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Built for students in Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} CampusNest. All rights reserved.</p>

          <p>Made for student living in Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
