"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

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
    // User is signed in, display welcome message and link to the shopping list page
    return (
      <div>
        <p>Welcome, {user.displayName} ({user.email})</p>
        {/* Link to the shopping-list page */}
        <Link href="/week8/shopping-list/">
          <a>Continue to your Shopping List</a> {/* Use an <a> tag for proper styling and functionality */}
        </Link>
      </div>
    );
  } else {
    // User is not signed in, display sign-in button
    return (
      <div>
        <p>Please sign in to access your shopping list:</p>
        <button onClick={handleSignIn}>Sign in with GitHub</button>
      </div>
    );
  }
};

export default Page;
