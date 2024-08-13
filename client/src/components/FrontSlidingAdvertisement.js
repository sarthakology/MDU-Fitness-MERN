import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './images/img1.JPEG';
import img2 from './images/img2.JPEG';
import img3 from './images/img3.JPEG';
import img4 from './images/img4.JPEG';
import img5 from './images/img5.JPEG';

const FrontSlidingAdvertisement = () => {
  return (
    <Carousel interval={1000} /* Change the interval value as needed (in milliseconds) */>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1} // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>

          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2} // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>

          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3} // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>

          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4} // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>

          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5} // Replace with your image URL
          alt="First slide"
        />
        <Carousel.Caption>

          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FrontSlidingAdvertisement;
