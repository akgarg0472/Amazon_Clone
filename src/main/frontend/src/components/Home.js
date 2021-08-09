import React, { useEffect } from "react";
import Product from "./Product";

import "./home.css";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/PCshopnow/fdfo/AugART21_PC_hero_1x_Shopnow_FDFO._CB645150351_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id={1}
            title="Bhagavad Gita: Yatharoop - Hindi"
            price={179.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51m4iKQ5ExS._SY451_BO1,204,203,200_.jpg"
          />
          <Product
            id={2}
            title="Data Structures and Algorithms in Java"
            price={4475.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51NoqhM4r9L._SX407_BO1,204,203,200_.jpg"
          />
          <Product
            id={3}
            title="2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={179990.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81bF-d1dNoL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={4}
            title="Home Centre Emily Fabric 5 Seater Sectional Sofa Set (Beige)"
            price={29949.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91ybJJSZelL._SL1500_.jpg"
          />
          <Product
            id={5}
            title="New Apple iPhone 12 Pro Max (512GB) - Gold"
            price={148900.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="Samsung 189 cm (75 Inches) 4K Ultra HD Smart QLED TV QA75Q80RAKXXL (Black) (2019 Model)"
            price={379990.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Pp%2BKXbrjL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
