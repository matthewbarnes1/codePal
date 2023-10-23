import React, { useState } from 'react';
import './Shoppingcart.css'; 

function ShoppingCart() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="shopping-cart">
      <i className="fas fa-shopping-cart" onClick={toggleCart}></i>
      <span className="cart-item-count">3</span>
      <div className={`cart-contents ${isCartOpen ? 'active' : ''}`}>
        {/* Add cart contents here */}
        <p>bully treat</p>
        <p>cat scratch post</p>
        <p>pug treats</p>
      </div>
    </div>
  );
}

export default ShoppingCart;