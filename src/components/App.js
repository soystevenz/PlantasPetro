import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListPage from './ProductsListPage';
import CartPage from './CartPage';
import Header from './Header'; // Asegúrate de que el nombre del archivo es correcto
import './App.css';

// Ejemplo de datos de productos, reemplaza esto con tu fuente de datos real
const products = [
  { id: 1, name: 'Planta 1', price: 10, image: '/path/to/image1.jpg' },
  { id: 2, name: 'Planta 2', price: 15, image: '/path/to/image2.jpg' },
  // Añade más productos según sea necesario
];


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      updateCart(productId, existingItem.quantity + 1);
    } else {
      const product = products.find(p => p.id === productId); // Corregido aquí
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListPage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateCart={updateCart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
