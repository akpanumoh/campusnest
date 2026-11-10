import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Users,
  PlusCircle,
  MessageCircle,
  UserRound,
} from "lucide-react";

const tabs = [
  {
    label: "Browse",
    path: "/listings",
    icon: Search,
  },
  {
    label: "Roommates",
    path: "/roommates",
    icon: Users,
  },
  {
    label: "Post",
    path: "/listings/new",
    icon: PlusCircle,
    isPost: true,
  },
  {
    label: "Messages",
    path: "/messages",
    icon: MessageCircle,
  },
  {
    label: "Profile",
    path: "/dashboard",
    icon: UserRound,
  },
];

export default function BottomTabBar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-md md:hidden">
      <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          if (tab.isPost) {
            return (
              <button
                key={tab.label}
                onClick={() => navigate("/listings/new")}
                className="flex flex-col items-center justify-center gap-1"
                aria-label="Create a new listing"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Icon size={22} />
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={tab.label}
              to={tab.path}
              className={({ isActive }) =>
                `flex min-w-0 flex-col items-center justify-center gap-1 px-2 py-1 text-xs transition-colors ${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={21} strokeWidth={isActive ? 2.5 : 1.8} />
                  <span>{tab.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
