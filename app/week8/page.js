"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
    }
  };

  if (user) {
    // User is signed in, display welcome message
    return <p>Welcome, {user.displayName} ({user.email})</p>;
  } else {
    // User is not signed in, display sign in button
    return (
      <div>
        <p>Please sign in to access your shopping list:</p>
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      </div>
    );
  }
};

export default Page;
