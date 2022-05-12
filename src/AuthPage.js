import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    const user = await signIn(email, password);
    setUser(user);
  }
    
  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUp(email, password);
    setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>Restaurant-esque</em></h1>
      <form onSubmit={handleSignUp}>
        <label>
            Email
          <input required type="email" name="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
            Password
          <input required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
            Email
          <input required type="email" name="email" onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
            Password
          <input required type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}