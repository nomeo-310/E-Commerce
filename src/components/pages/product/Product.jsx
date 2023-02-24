import React from 'react';
import './product.scss';
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Product = ({productData, addItem, addWish}) => {
  const {id} = useParams();
  const data = productData.find((detail) => detail.id === +id);
  const [mainImage, setMainImage] = useState(data.img);
  return (
    <div className="product">
     <div className="product-container">
      <div className="left">
        <div className="thumbnails">
            <div className="item">
              <img src={data.img} alt="thumbnail" onClick={()=> setMainImage(data.img)}/>
            </div>
            {data.img2 && <div className="item"><img src={data.img2} alt="thumbnail" onClick={()=> setMainImage(data.img2)}/></div>}
        </div>
      </div>
      <div className="center">
        <div className="image">
          <img src={mainImage} alt="product_image"/>
        </div>
      </div>
      <div className="right">
        <div className="desc">
          <h1>{data.title}</h1>
          <h2><i className="fa-solid fa-naira-sign"></i>{data.new_price.toLocaleString()}:00</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis quidem, beatae vero, vel officiis suscipit officia 
                repellat doloremque nemo et sint! Aspernatur earum tempore fugiat 
                sunt distinctio excepturi nemo cum quam facere minus, ad, 
                necessitatibus libero obcaecati maxime numquam vero alias. 
                Neque accusantium modi harum.
          </p>
        </div>
        <div className="add-buttons">
          <button onClick={() => addItem(data)}><i className="fa-solid fa-shopping-cart"></i>add to cart</button>
          <button onClick={() => addWish(data)}><i className="fa-solid fa-heart"></i>add to wish list</button>
        </div>
        <div className="product-details">
          <li>vendor: {data.vendor}</li>
          <li>product type: {data.product_type}</li>
          <li>category: <Link to={`/products/${data.category}`} className="link">{data.category}</Link></li>
          <li>tag: {data.product_tag}</li>
        </div>
        <div className="bottom">
          <li>description</li>
          <li>additional information</li>
          <li>faq</li>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Product;
