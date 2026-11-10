// Temporary dummy implementation
export const useAuth = () => {
  // Toggle this true/false to test both states of your Navbar
  const isLoggedIn = true;

  if (isLoggedIn) {
    return {
      user: {
        id: "123",
        name: "Test User",
        email: "test@campusnest.com",
      },
      signOut: async () => {
        console.log("Mock sign out clicked");
        return Promise.resolve();
      },
    };
  }

  // Logged out state
  return {
    user: null,
    signOut: async () => Promise.resolve(),
  };
};
