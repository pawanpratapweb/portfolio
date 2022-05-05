import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `Services`;
  });
  return (
    <>
      <div className="headerS">
        <div className="servicesCard">
          <i class="fas fa-gem"></i>
          <h1>
            Premium
            <br /> React Website
          </h1>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content
          </p>
        </div>
        <div className="servicesCard">
          <i class="far fa-graduation-cap"></i>
          <h1>
            Ready to use
            <br /> on Web
          </h1>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content
          </p>
        </div>
        <div className="servicesCard">
          <i class="far fa-edit"></i>
          <h1>
            Edit
            <br /> Comfortabaly
          </h1>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content
          </p>
        </div>
      </div>
    </>
  );
}
