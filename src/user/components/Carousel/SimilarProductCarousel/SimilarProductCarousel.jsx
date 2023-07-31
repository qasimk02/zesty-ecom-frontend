import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import ProductCard from "../../Card/ProductCard/ProductCard";

const SimilarProductCarousel = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = product.map((item) => (
    <ProductCard key={item} product={item} />
  ));

  const responsive = {
    0: { items: 2 },
    400: { items: 3 },
    700: { items: 4 },
    1080: { items: 7 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = (items) => setActiveIndex(items);
  console.log(activeIndex);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-3 ml-3">
        Similar Products
      </h2>
      <div className="relative px-5 pb-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {/* left button */}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "10rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}

        {/* right button */}
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "10rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SimilarProductCarousel;
