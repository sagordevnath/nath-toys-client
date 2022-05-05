import React from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9t2d82d/carousel1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='text-warning'>Baby relationship with Toys</h3>
            <p className='text-info'>It impacts cognitive development, social and emotional development, as well as language development.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/zXFGzFR/carousel2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='text-warning'>Benefits of Traditional Toys</h3>
            <p className='text-info'>Creative Thinking, Physical Activity, Durability,An Ethical Choice</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/17s6x6c/carousel3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='text-warning'>Toys affect child development</h3>
            <p className='text-info'>
            make room for your child's constantly evolving perspective of the world.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
