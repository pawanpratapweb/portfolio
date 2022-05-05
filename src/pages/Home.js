import React from 'react';
import { Link } from 'react-router-dom';
import signInWithPopup from '../components/signInPopup';

export default function Home() {
  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div className="mainContainer">
        <nav className="navBar">
          <h1>Slackbuilt</h1>
          <div>
            <button className="login">Login</button>
            <button className="signUp">Sign Up</button>
          </div>
        </nav>
        <div className="header">
          <h1>Welcome to Your Social Media App</h1>
          <button onClicl={() => signInWithPopup()}>login</button>
        </div>
      </div>
    </>
  );
}
