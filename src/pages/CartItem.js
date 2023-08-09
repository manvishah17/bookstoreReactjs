import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartItem({ item }) {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.product_id !== item.product_id);
    setCart(updatedCart);
  };

  const increaseQuantity = () => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = () => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.product_id === item.product_id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1,
        };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.product_name} />
      <div className="item-details">
        <h3>{item.product_name}</h3>
        <p>Price: ₹{item.price}</p>
        <div className="quantity">
          <button  className="add" onClick={decreaseQuantity}>-</button>
          <span  className="add">{item.quantity}</span>
          <button   className="add"onClick={increaseQuantity}>+</button>
        </div>
        <button   className="add1"onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
