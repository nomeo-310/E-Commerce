import React from 'react';
import './cart.scss'
const Cart = ({cartItems, increaseItem, deleteItem, decreaseItem, clearCart, closeCart}) => {

    const totalPrice = cartItems.reduce((price, items) => price + items.quantity * items.new_price, 0)
    const calcPrice=(a,b)=> {
        let totalprice = a * b;
        return totalprice
      };
  return ( 
    <div className="cart">
       <h2>products in your cart</h2>
       <span className="close-button" onClick={closeCart}><i className="fa-solid fa-x"></i></span>
       {cartItems.length === 0 && <div className="empty-cart">your cart is empty</div>}
       <div className="cart-item-list">
        {cartItems.map((cartItem) => (
        <div className="cart-item" key={cartItem.id}>
            <div className="item-image">
                <img src={cartItem.img} alt="item_image"/>
            </div>
            <div className="item-desc">
                <h3><span>name:</span> {cartItem.title}</h3>
                <h3><span>tag:</span> {cartItem.product_tag}</h3>
                <h3><span>price:</span><i className="fa-solid fa-naira-sign"></i>{cartItem.new_price}:00</h3>
                <div className="item-controls">
                    <button onClick={() => decreaseItem(cartItem)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => increaseItem(cartItem)}>+</button> 
                </div>
                
                <h3><span>total price:</span> ${calcPrice(cartItem.quantity, cartItem.new_price)}:00</h3>
            </div>
            <div className="item-delete">
                <i className="fa-solid fa-trash" onClick={() => deleteItem(cartItem)}></i>
            </div>
        </div>
        ))}

       </div>
        {cartItems.length >=1 && 
            <div>
                <div className="price-pane">
                    <h3>subtotal</h3>
                    <h3>${totalPrice.toLocaleString()}:00</h3>
                </div>
                <div className="check-out-button">
                    <button>proceed check out</button>
                </div>
                <div className="clear-cart-button">
                    <button onClick={clearCart}>clear cart</button>
                </div>
            </div>}
    </div>
  );
}

export default Cart;
