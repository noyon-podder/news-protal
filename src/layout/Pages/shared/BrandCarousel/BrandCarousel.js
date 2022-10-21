import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../../assets/brandImage/brand1.jpg';
import brand2 from '../../../../assets/brandImage/brand2.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brand2}
            alt="Second slide"
          />
  
          
        </Carousel.Item>
        
      </Carousel>
    );
};

export default BrandCarousel;