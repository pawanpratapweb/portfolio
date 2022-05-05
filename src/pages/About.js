import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = `Services`;
  });
  return (
    <>
      <div className="headerS"></div>
    </>
  );
}
