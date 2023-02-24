import React from 'react'
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from '../pages/home/Home';
import Product from '../pages/product/Product';
import Products from '../pages/products/Products';
import Contact from '../pages/contact/Contact';
import About from '../pages/about/About';

const Router = ({productData, addItem, cartItems, increaseItem, decreaseItem, addWish}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home productData={productData}/>}/>
        <Route path='/products/:id' element={<Products productData={productData}/>}/>
        <Route path='/product/:id' element={<Product productData={productData} addItem={addItem} cartItems={cartItems} increaseItem={increaseItem} decreaseItem={decreaseItem} addWish={addWish}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Router;