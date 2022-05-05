import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });
  return (
    <>
        <div className="header">
          <h1>Made by Pawan Pratap</h1>
          <p>Only for Replit</p>
        </div>
    </>
  );
}
