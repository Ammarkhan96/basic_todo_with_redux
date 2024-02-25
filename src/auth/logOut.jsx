import React from 'react';
import { auth } from '../config/firebase';

function LogOut() {
  const handleLogOut = async () => {
    try {
      await auth.signOut();
      alert('User signed out successfully!');
    } catch (error) {
      alert('Error signing out:', error);
    }
  };

  return (
    <div>
        <h1>LogOut </h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default LogOut;
