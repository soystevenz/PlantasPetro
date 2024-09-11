import React from 'react';
import './Header.css';
import { ShoppingCart } from 'lucide-react';


const Header = ({ cartCount }) => (
  <header>
    <h1>PlantasPetro</h1>
    <nav>
      <a href="/">Inicio</a>
      <a href="/products">Productos</a>        
      <a href="/cart">
        <ShoppingCart />      
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </a>
    </nav>
  </header>
);

export default Header;
