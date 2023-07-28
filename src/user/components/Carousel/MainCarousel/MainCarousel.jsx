import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mainCarouselData from "../../../Data/MainCarouselData";

const items = mainCarouselData.map((item) => (
  <img
    width="100%"
    className="cursor-pointer"
    src={item.image}
    alt="presentation"
    role="presentation"
  />
));

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCarousel;
