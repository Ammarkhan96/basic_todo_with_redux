import React, { useState } from 'react';
import { auth } from '../config/firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      await auth.createUserWithEmailAndPassword(email, password);
      alert('User signed up successfully!');
    } catch (error) {
      alert('Error signing up:', error);
    }
  };

  return (
    <div>
        <h1>Sign Up</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
