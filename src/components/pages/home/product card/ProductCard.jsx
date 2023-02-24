import React from 'react'
import { Link } from 'react-router-dom';
import './product-card.scss';

const ProductCard = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
        <div className="product-card">
            <div className="image">
                {item.isNew && <span>new season</span>}
                <img src={item.img} alt="" className="main-image"/>
                <img src={item.img2} alt="" className="minor-image"/>
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3 className="old-price"><i className="fa-solid fa-naira-sign"></i>{item.old_price.toLocaleString()}:00</h3>
                <h3 className="new-price"><i className="fa-solid fa-naira-sign"></i>{item.new_price.toLocaleString()}:00</h3>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard;
