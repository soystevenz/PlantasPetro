import React from "react";
import './CartPage.css';

const CartPage = ({ cartItems, updateCart, removeFromCart }) => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0); 

    return (
        <div>
            <h2>Tu Carrito</h2>
            <p>Total de plantas: {totalItems}</p>
            <p>Coste total: ${totalPrice.toFixed(2)}</p>
            <button>Próximamente (Pagar)</button>
            <button onClick={() => window.history.back()}>Continuar comprando</button>    
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
                                <button onClick={() => updateCart(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;
