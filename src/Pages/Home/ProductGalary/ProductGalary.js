import React from "react";
import "./ProductGalary.css";

const ProductGalary = () => {
  return (
    <div className="container">
      <h1>Product Gallery</h1>

      <div className="row">
        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://assets.codepen.io/652/the-lucky-neko-CM7a-XBD4AU-unsplash.jpg" />
              </div>
              <div className="flip-card-back ollie">
                <h1>Ollie</h1>
                <p className="type">Kitten</p>
                <p className="age">12 weeks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://assets.codepen.io/652/karsten-winegeart-NE0XGVKTmcA-unsplash.jpg"
                  alt="a brown French bulldog puppy laying down and looking up with a hopeful look in its eyes. "
                  title="Photo by Karsten Winegeart for Unsplash"
                />
              </div>
              <div className="flip-card-back barney">
                <h1>Barney</h1>
                <p className="type">Puppy</p>
                <p className="age">9 weeks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://assets.codepen.io/652/kabo-NjWZ07sPEJE-unsplash.jpg"
                  alt="A large long-haired orange cat with a white belly. "
                  title="Photo by Kabo for Unsplash"
                />
              </div>
              <div className="flip-card-back walter">
                <h1>Walter</h1>
                <p className="type">Cat</p>
                <p className="age">5 years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://assets.codepen.io/652/giacomo-lucarini-7M0SG3ZKdlE-unsplash.jpg"
                  alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
                  title="Photo by Giacomo Lucarini for Unsplash"
                />
              </div>
              <div className="flip-card-back miss">
                <h1>Miss Sunshine</h1>
                <p className="type">Dog</p>
                <p className="age">5 years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://assets.codepen.io/652/sergey-semin-Y0WXj3xqJz0-unsplash.jpg"
                  alt="A tabby kitten with green eyes. "
                  title="Photo by Sergey Semin for Unsplash"
                />
              </div>
              <div className="flip-card-back reese">
                <h1>Reese</h1>
                <p className="type">Kitten</p>
                <p className="age">8 weeks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://assets.codepen.io/652/jordan-bigelow-X5VoG4MA5aI-unsplash.jpg"
                  alt="A light brown puppy standing on a white and tan woven pet bed. "
                  title="Photo by Sergey Semin for Unsplash"
                />
              </div>
              <div className="flip-card-back bruce">
                <h1>Bruce</h1>
                <p className="type">Puppy</p>
                <p className="age">10 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalary;
