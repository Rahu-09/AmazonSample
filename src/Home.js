import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="123123"
            title="Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt"
            price={24.99}
            image="https://m.media-amazon.com/images/I/71id+wwTw-L._AC_UX569_.jpg"
            rating={5}
          />
          <Product
            id="456456"
            title="Beninos Mens Long Sleeve Slim Fit Dress Shirts"
            price={20.99}
            image="https://m.media-amazon.com/images/I/51m3RtaglUL._AC_UX425_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="789789"
            title="J.Ver Men's Casual Long Sleeve Stretch Dress Shirt Wrinkle-Free Regular Fit Button Down Shirts"
            price={24.99}
            image="https://m.media-amazon.com/images/I/71rMV8PddtL._AC_UX425_.jpg"
            rating={4}
          />
          <Product
            id="135135"
            title="Alex Vando Mens Dress Shirts Wrinkle Free Regular Fit Stretch Bamboo Men Shirt"
            price={28.99}
            image="https://m.media-amazon.com/images/I/7160H5UuVWL._AC_UX569_.jpg"
            rating={4}
          />
          <Product
            id="246246"
            title="Pacinoble Mens Long Sleeve Fashion Luxury Design Print Dress Shirt"
            price={27.99}
            image="https://m.media-amazon.com/images/I/81Ic0ikcw0L._AC_UY550_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="369369"
            title="COOFANDY Men's Muscle Fit Dress Shirts Wrinkle-Free Long Sleeve Casual Button Down Shirt"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51FLOOha+US._AC_SY550._SX._UX._SY._UY_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
