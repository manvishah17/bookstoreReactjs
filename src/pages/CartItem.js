import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartItem({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const existingCartItem = cart.find(cartItem => cartItem.product_id === item.product_id);

  const updateCartInStorage = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeItem = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.product_id !== item.product_id);
    updateCartInStorage(updatedCart);
  };

  const increaseQuantity = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.product_id === item.product_id
        ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
        : cartItem
    );
    updateCartInStorage(updatedCart);
  };

  const decreaseQuantity = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.product_id === item.product_id
        ? { ...cartItem, quantity: Math.max((cartItem.quantity || 0) - 1, 1) }
        : cartItem
    );
    updateCartInStorage(updatedCart);
  };
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.product_name} />
        <div className="item-details">
          <h3>{item.product_name}</h3>
          <p>Price: ₹{item.price}</p>
          <div className="quantity">
            <button className="add" onClick={decreaseQuantity}>-</button>
            <span className="add">{existingCartItem ? existingCartItem.quantity : 1}</span>
            <button className="add" onClick={increaseQuantity}>+</button>
          </div>
          <button className="add1" onClick={removeItem}>Remove</button>
        </div>
      </div>
    );

}

export default CartItem;
