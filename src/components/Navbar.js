import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav>
        <h1>PratapTechnical</h1>
        <div>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/services" className="navLink">
            Services
          </Link>
          <Link to="/about" className="navLink">
            About Us
          </Link>
          <Link to="/contact" className="navLink">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
