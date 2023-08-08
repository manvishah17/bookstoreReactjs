import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
