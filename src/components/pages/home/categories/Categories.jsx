import React from 'react';
import { Link } from 'react-router-dom';
import './categories.scss';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.jpg';
const Categories = () => {
  return (
    <div className="categories">
        <h1>categories</h1>
        <div className="categories-container">
            <div className="col">
                <div>
                    <img src={img1} alt="sale"/>
                    <button>
                        <Link to="/products/sales" className="link">sales</Link>
                    </button>
                </div>
                <div>
                    <img src={img5} alt="women"/>
                    <button>
                        <Link to="/products/women" className="link">women</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div>
                    <img src={img2} alt="new season"/>
                    <button>
                        <Link to="/products/children" className="link">children</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div>
                        <img src={img3} alt="men"/>
                        <button>
                        <Link to="/products/men" className="link">men</Link>
                    </button>
                    </div>
                    <div>
                        <img src={img4} alt="accessories"/>
                        <button>
                            <Link to="/products/accessories" className="link">accessories</Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <img src={img6} alt="shoes"/>
                    <button>
                        <Link to="/products/shoes" className="link">shoes</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Categories;
