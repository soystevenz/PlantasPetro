import React, { useState } from 'react';
import './ProductsListPage.css';

const products = [
  { id: 1, name: 'Planta A', price: 10, category: 'Suculentas', image: '/images/girasol.jpg' }, 
  { id: 2, name: 'Planta B', price: 15, category: 'Cactus', image: 'link/to/imageB' },
  { id: 3, name: 'Planta C', price: 12, category: 'Tropicales', image: 'link/to/imageC' },
  
];

const ProductListPage = ({ addToCart }) => {
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (productId) => {
    setAddedToCart([...addedToCart, productId]);
    addToCart(productId);
  };

  return (
    <div>
      <h2>Nuestra colección de plantas</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              disabled={addedToCart.includes(product.id)}
              onClick={() => handleAddToCart(product.id)}
            >
              {addedToCart.includes(product.id) ? 'Añadido' : 'Añadir a la cesta'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
