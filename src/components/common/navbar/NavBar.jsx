import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import langImg from '../../images/language.png';
import Cart from '../../pages/cart/Cart';
import WishList from '../../pages/wish list/WishList';
import LoginForm from '../../pages/login/LoginForm';

const NavBar = ({cartItems, increaseItem, deleteItem, decreaseItem, clearCart, wishItems, addItem, deleteWish, clearWish}) => {
  const [mobileMenu, setMobileMenu] = useState('inactive');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerIcon, setHamburgerIcon] = useState('');

  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const openMenu =()=> {
    setMobileMenu('active');
    setHamburgerIcon('active');
  }
  const closeMenu =()=> {
    setMobileMenu('inactive');
    setHamburgerIcon('');
  }
  const toggleHamburger =()=> {
    if (menuOpen) {
      setMenuOpen(false);
      openMenu();
    } else {
      setMenuOpen(true);
      closeMenu();
    }
  };

  return (
    <div className="nav-bar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={langImg} alt="" />
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="item">
            <span>USD</span>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className="item">
            <Link to="/products/women" className="link">women</Link>
          </div>
          <div className="item">
            <Link to="/products/men" className="link">men</Link>
          </div>
          <div className="item">
            <Link to="/products/children" className="link">children</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link" onClick={closeMenu}>Nomeo Stores</Link>
          <div className="mobile-menu-icon">
            <div className="favorite-icon">
              <i className="fa-solid fa-heart" onClick={() => setOpenWishList(!openWishList)}></i>
              {wishItems.length >= 1 && <span>{wishItems.length}</span>}
            </div>
            <div className="cart-icon">
              <i className="fa-solid fa-shopping-cart" onClick={() => setOpenCart(!openCart)}></i>
              {cartItems.length >=1 && <span>{cartItems.length}</span>}
            </div>
          </div>
          <div className={`hamburger-menu ${hamburgerIcon}`} onClick={toggleHamburger}>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/about" className="link">about</Link>
          </div>
          <div className="item">
            <Link to="/contact" className="link">contact</Link>
          </div>
          <div className="icons">
            <i className="fa-solid fa-user" onClick={() => setOpenLogin(!openLogin)}></i>
            <div className="favorite-icon">
              <i className="fa-solid fa-heart" onClick={() => setOpenWishList(!openWishList)}></i>
              {wishItems.length >= 1 && <span>{wishItems.length}</span>}
            </div>
            <div className="cart-icon">
              <i className="fa-solid fa-shopping-cart" onClick={() => setOpenCart(!openCart)}></i>
              {cartItems.length >=1 && <span>{cartItems.length}</span>}
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${mobileMenu}`}>
          <div className="item">
            <Link to="/products/women" className="link" onClick={closeMenu}>women</Link>
          </div>
          <div className="item">
            <Link to="/products/men" className="link" onClick={closeMenu}>men</Link>
          </div>
          <div className="item">
            <Link to="/products/children" className="link" onClick={closeMenu}>children</Link>
          </div>
          <div className="item">
            <Link to="/about" className="link" onClick={closeMenu}>about</Link>
          </div>
          <div className="item">
            <Link to="/contact" className="link" onClick={closeMenu}>contact</Link>
          </div>
          <div className="item">
            <Link className="link" onClick={closeMenu}><i className="fa-solid fa-user" onClick={() => setOpenLogin(!openLogin)}></i></Link>
          </div>
      </div>
      {openCart && <Cart cartItems={cartItems} increaseItem={increaseItem} deleteItem={deleteItem} decreaseItem={decreaseItem} clearCart={clearCart} closeCart={()=> setOpenCart(false)}/>}
      {openWishList && <WishList wishItems={wishItems} addItem={addItem} deleteWish={deleteWish} clearWish={clearWish} closeWishList={() => setOpenWishList(false)}/>}
      {openLogin && <LoginForm closeLogin={() => setOpenLogin(false)}/>}
    </div>
  )
}

export default NavBar
