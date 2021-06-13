import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../utils/initFirebase';

function Test() {
  const { logout } = useAuth();

  async function handleLogout() {
    try {
      await auth.signout();
    } catch {
      console.log('error');
    }
  }

  return (
    <div>
      <button onClick={() => handleLogout}>Logout</button>
    </div>
  );
}

export default Test;
