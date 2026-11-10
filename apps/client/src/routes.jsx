import { createBrowserRouter } from "react-router-dom";

import AppShell from "./components/layout/AppShell";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

import ListingsPage from "./features/listings/pages/ListingsPage";
import ListingDetailPage from "./features/listings/pages/ListingDetailPage";
import NewListingPage from "./features/listings/pages/NewListingPage";
import EditListingPage from "./features/listings/pages/EditListingPage";

import RoommatesPage from "./features/roommates/pages/RoommatesPage";
import RoommateDetailPage from "./features/roommates/pages/RoommateDetailPage";
import NewRoommatePostPage from "./features/roommates/pages/NewRoommatePostPage";
import EditRoommatePostPage from "./features/roommates/pages/EditRoommatePostPage";

import InboxPage from "./features/messaging/pages/InboxPage";
import ConversationPage from "./features/messaging/pages/ConversationPage";

import DashboardPage from "./features/dashboard/pages/DashboardPage";

import LoginPage from "./features/auth/pages/LoginPage";
import SignupPage from "./features/auth/pages/SignupPage";
import ForgotPasswordPage from "./features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";
import ConfirmEmailPage from "./features/auth/pages/ConfirmEmailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "listings", element: <ListingsPage /> },
      { path: "listings/:id", element: <ListingDetailPage /> },
      { path: "listings/new", element: <NewListingPage /> },
      { path: "listings/:id/edit", element: <EditListingPage /> },

      { path: "roommates", element: <RoommatesPage /> },
      { path: "roommates/:id", element: <RoommateDetailPage /> },
      { path: "roommates/new", element: <NewRoommatePostPage /> },
      { path: "roommates/:id/edit", element: <EditRoommatePostPage /> },

      { path: "messages", element: <InboxPage /> },
      { path: "messages/:conversationId", element: <ConversationPage /> },

      { path: "dashboard", element: <DashboardPage /> },

      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "confirm-email", element: <ConfirmEmailPage /> },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
