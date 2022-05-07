import React from "react";
import "./ProductGalary.css";

const ProductGalary = () => {
  return (
    <div className="product-gallery container">
      <h1 className='text-center text-primary'>Kids Gallery</h1>
      <div className="rows">
        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img 
                  src="https://i.ibb.co/WyTWBM2/gallery1.jpg"
                  alt="a browsn French bulldog puppy laying down and looking up with a hopeful look in its eyes. "
                  title="Photo by Karsten Winegeart for Unsplash"
                 />
              </div>
              <div className="flip-card-back ollie">
                <h1>Ollie</h1>
                <p className="type">Kitten</p>
                <p className="age">12 weeks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ibb.co/wdxPFp8/gallery2.jpg"
                  alt="a browsn French bulldog puppy laying down and looking up with a hopeful look in its eyes. "
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
        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ibb.co/12xFftH/gallery3.jpg"
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
        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ibb.co/y4zXN8G/gallery4.jpg"
                  alt="A light browsn, long-haired chihuahua sitting next to three rubber duckies. "
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

        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ibb.co/2MhW2Rn/gallery5.jpg"
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

        <div className="columns">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ibb.co/BgR01xC/gallery6.jpg"
                  alt="A light browsn puppy standing on a white and tan woven pet bed. "
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
