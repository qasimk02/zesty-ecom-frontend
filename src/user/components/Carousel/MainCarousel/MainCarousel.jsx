import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mainCarouselData from "../../../Data/MainCarouselData";
import img4 from "./banner4.jpg";

const items = mainCarouselData.map((item) => (
  <img
    width="100%"
    className="cursor-pointer"
    src={img4}
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
