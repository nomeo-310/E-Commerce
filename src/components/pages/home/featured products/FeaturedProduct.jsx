import React from 'react';
import './featured-product.scss';
import ProductCard from '../product card/ProductCard';

const FeaturedProduct = ({type, data}) => {
  return (
    <div className="featured-product">
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum similique atque, sint numquam error, doloribus eveniet 
                impedit beatae est et aut iusto culpa reiciendis reprehenderit 
                dolorum saepe veniam cupiditate nobis.
            </p>
        </div>
        <div className="bottom">
            {data.map((item) => (<ProductCard key={item.id} item={item}/>))}
        </div>
    </div>
  )
}

export default FeaturedProduct;
