import React from "react";
import MainCarousel from "../components/Carousel/MainCarousel/MainCarousel";
import HomeSectionCarousel from "../components/Carousel/HomeSectionCarousel/HomeSectionCarousel";
import mensShirts from "../Data/HomeSectionData/MensShirt";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 px-4 lg:px-8">
        <HomeSectionCarousel data={mensShirts} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mensShirts} sectionName={"Men's Jeans"} />
        <HomeSectionCarousel data={mensShirts} sectionName={"Men's Tshirt"} />
        <HomeSectionCarousel data={mensShirts} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel
          data={mensShirts}
          sectionName={"Men's Sunglasses"}
        />
      </div>
    </div>
  );
};

export default HomePage;
