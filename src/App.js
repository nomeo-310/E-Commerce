import React from 'react';
import './App.scss';
import './css/all.min.css';
import './css/brands.css';
import './css/brands.min.css';
import './css/fontawesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router/Router';
import NavBar from './components/common/navbar/NavBar';
import Footer from './components/common/footer/Footer';
import { productData } from './components/data/productData';
import { useState } from 'react';

const App =() => {
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  const increaseItem =(items)=> {
    const itemExist = cartItems.find((item) => item.id === items.id);
    if (itemExist) {
      setCartItems(cartItems.map((item) => item.id === items.id ? {...itemExist, quantity: itemExist.quantity + 1 } : item));

    } else {
      setCartItems([...cartItems, {...items, quantity: 1}])
    }
  };

  const decreaseItem =(items)=> {
    const itemExist = cartItems.find((item) => item.id === items.id);
    if (itemExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== items.id));
    } else {
      setCartItems(cartItems.map((item) => item.id === items.id ? {...itemExist, quantity: itemExist.quantity - 1} : item));
    };
  };

  const deleteItem =(items)=> {
    const itemsExist = cartItems.find((item) => item.id === items.id);
    if (itemsExist) {
      setCartItems(cartItems.filter((item) => item.id !== items.id ));
    }
  };


  const clearCart =()=> {
    setCartItems([]);
  }

  const addItem =(items)=> {
    const itemExist = cartItems.find((item) => item.id === items.id);
    if (itemExist) {
      setCartItems(cartItems.map((item) => item.id === items.id ? {...itemExist, quantity: itemExist.quantity + 0 } : item));
    } else {
      setCartItems([...cartItems, {...items, quantity: 1}]);
    }
    deleteWish(items);
  };

  const addWish =(items)=> {
    const wishExist = wishItems.find((item) => item.id === items.id);
    if (wishExist) {
      setWishItems(wishItems.map((item) => item.id === items.id ? {...wishExist, wished: wishExist.wished + 0}: item));
    } else {
      setWishItems([...wishItems, {...items, wished: 1}]);
    }
  };

  const deleteWish =(items)=> {
    const itemExist = wishItems.find((item) => item.id === items.id);
    if (itemExist) {
      setWishItems(wishItems.filter((item) => item.id !== items.id));
    };
  };

  const clearWish =()=> {
    setWishItems([]);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar 
          cartItems={cartItems} 
          increaseItem={increaseItem}
          decreaseItem={decreaseItem}
          deleteItem={deleteItem}
          clearCart={clearCart}
          wishItems={wishItems}
          addItem={addItem}
          deleteWish={deleteWish}
          clearWish={clearWish}
          />
        <Router 
          productData={productData} 
          addItem={addItem}
          addWish={addWish}
          cartItems={cartItems}
          wishItems={wishItems}
          />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
