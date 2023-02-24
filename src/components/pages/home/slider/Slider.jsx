import React from 'react';
import { useState } from 'react';
import './slider.scss';
import prevImg from './images/arrow-left-long.svg';
import nextImg from './images/arrow-right-long.svg';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            id: 1,
            name: 'image_1',
            image: require('../slider/images/img-1.jpg'),
        },
        {
            id: 2,
            name: 'image_2',
            image: require('../slider/images/img-2.jpg'),
        },
        {
            id: 3,
            name: 'image_3',
            image: require('../slider/images/img-3.jpg'),
        },
        {
            id: 4,
            name: 'image_4',
            image: require('../slider/images/img-4.jpg'),
        },
        {
            id: 5,
            name: 'image_5',
            image: require('../slider/images/img-5.jpg'),
        },
        {
            id: 6,
            name: 'image_6',
            image: require('../slider/images/img-6.jpg'),
        },
        {
            id: 7,
            name: 'image_7',
            image: require('../slider/images/img-7.jpg'),
        },
        {
            id: 8,
            name: 'image_8',
            image: require('../slider/images/img-8.jpg'),
        }
    ];

    const SliderImage =({image, name})=> {
        return(
            <img src={image} alt={name}/>
        );
    };

    const prevSlide =()=> {
        setCurrentSlide(currentSlide === 0 ? 7 : (prev) => prev - 1);
    };
    const nextSlide =()=> {
        setCurrentSlide(currentSlide === 7 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className="slider">
        <div className="slider-container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {images.map((img) => (<SliderImage key={img.id} {...img}/>))}
        </div>
        <div className="slider-controls">
            <div className="prev-button">
                <img src={prevImg} alt="prev_arrow" onClick={prevSlide}/>
            </div>
            <div className="next-button">
                <img src={nextImg} alt="next_arrow" onClick={nextSlide}/>
            </div>
        </div>
    </div>
  )
}

export default Slider;
