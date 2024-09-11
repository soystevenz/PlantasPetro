import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-background">
        <h1>Tienda de Plantas Petro</h1>
        <p>Bienvenido a nuestra tienda de plantas Petro. Encuentra las mejores plantas para decorar tu hogar.</p>
        <Link to="/products">
          <button>Comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
