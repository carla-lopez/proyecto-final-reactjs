import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


const MainMenu = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href="http://localhost:3000/category/indumentaria">
          <img
            className="d-block w-100"
            src="https://d22fxaf9t8d39k.cloudfront.net/58879de8030667808c8e6f81d27f5efe60dd9ad53feba00b98d3d5f34352145b72670.png"
            alt="Indumentaria"
          />
          <Carousel.Caption>
            <h3>Indumentaria</h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://localhost:3000/category/accesorios">
          <img
            className="d-block w-100"
            src="https://d22fxaf9t8d39k.cloudfront.net/8eb00ac87d57ca19e73b10f92de0f1d959aa18da781f263932a6fac1c9048c5c72670.png"
            alt="Accesorios"
          />
          <Carousel.Caption>
            <h3>Accesorios</h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://localhost:3000/category/mochilas">
          <img
            className="d-block w-100"
            src="https://d22fxaf9t8d39k.cloudfront.net/d9bcf68708a2e20325e2019273c7c381d47b675eb9e6f2b9fd1a92e55056c96672670.png"
            alt="Mochilas"
          />
          <Carousel.Caption>
            <h3>Mochilas</h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://localhost:3000/category/suplementos">
          <img
            className="d-block w-100"
            src="https://d22fxaf9t8d39k.cloudfront.net/66dad4eef4904d3a6c4b87186609acbe5184d05f54d8598864830bdc6130069272670.png"
            alt="Sumplementos"
          />
          <Carousel.Caption>
            <h3>Suplementos</h3>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainMenu;
