import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Tasty &amp; Fresh</h1>
      </div>
      <div className="home-content">
        <img
          src="https://res.cloudinary.com/cloudbt/image/upload/v1638003158/foodndrinks/cereals_e2uuuz.jpg"
          alt="Cereals"
        />
      </div>
    </div>
  );
}
