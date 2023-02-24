import React from 'react';
import './home.scss';
import Slider from './slider/Slider';
import FeaturedProduct from './featured products/FeaturedProduct';
import Categories from './categories/Categories';

const Home = ({productData}) => {

  const filterData =(val)=> {
    const Products = productData.filter(((item) => item.tag === val)).slice(0,4);
    return Products;
  };

  const featureData = filterData('featured');
  const trendingData = filterData('trending');
  return (
    <div className="home">
      <Slider/>
      <FeaturedProduct type="featured" data={featureData}/>
      <Categories/>
      <FeaturedProduct type="trending" data={trendingData}/>
    </div>
  )
}

export default Home;
