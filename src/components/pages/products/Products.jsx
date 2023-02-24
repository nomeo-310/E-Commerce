import React from 'react';
import './products.scss';
import { useParams } from 'react-router';
import ProductCard from '../home/product card/ProductCard';
import accessories from './accessories.jpg';
import men from './men.jpg';
import women from './women.jpg';
import children from './children.jpg';
import sales from './sales.jpg';
import shoes from './shoes.jpg';
import ReactPaginate from 'react-paginate';
import { useState } from 'react'
import { useEffect } from 'react';
import Header from '../../common/header/Header';

const Products = ({productData}) => {
  const {id} = useParams();

  const bannerSelector =(value) => {
    if (value === 'men') {
      const img = men;
      return img;
    };
    if (value === 'women') {
      const img = women;
      return img;
    };
    if (value === 'sales') {
      const img = sales;
      return img;
    };
    if (value === 'accessories') {
      const img = accessories;
      return img;
    };
    if (value === 'children') {
      const img = children;
      return img;
    };
    if (value === 'shoes') {
      const img = shoes;
      return img;
    };
  };
  const img = bannerSelector(id)
  
  const filterData =(val)=> {
    if (val === 'sales') {
      const Products = productData.filter(((item) => item.tag === 'sales'));
      return Products;
    } else {
      const Products = productData.filter(((item) => item.category === val));
      return Products;
    };
  };

  const productSet = filterData(id);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
      const endOffset =itemOffset + itemsPerPage;
      setCurrentItems(productSet.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(productSet.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, productSet]);

  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % productSet.length;
      setItemOffset(newOffset);
  };

  return (
    <div className="products">
      <Header img={img} title={`${id} category`}/>
      <div className="products-container">
        <div className="left">
          <h1>categories</h1>
          <div className="category-list">
            <li>shoes</li>
            <li>accesories</li>
            <li>sweater</li>
            <li>jackets</li>
            <li>wrist watch</li>
            <li>new arrivals</li>
          </div>
        </div>
        <div className="right">
          <div className="top">
            {currentItems.map((item) => (<ProductCard key={item.id} item={item}/>))}
          </div>
          <div className="bottom">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="prev"
                nextLinkClassName="next"
                activeClassName="active-num"
            /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
