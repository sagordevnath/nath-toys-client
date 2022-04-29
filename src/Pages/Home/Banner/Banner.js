import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0117-best-teeturtle-toys-b484b4.jpg?w=1280https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0117-best-teeturtle-toys-b484b4.jpg?w=1280"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kdvr.com/wp-content/uploads/sites/11/2022/02/1040x585-2022-0117-best-teeturtle-toys-b484b4.jpg?w=1280"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
