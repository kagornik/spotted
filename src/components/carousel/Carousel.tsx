import React from "react";
import Carousel from "react-multi-carousel";
import FeatureCard from "../card/FeatureCard";
import { featuresData } from "../card/FeatureCardData";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        ssr={false}
        infinite={true}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {featuresData.map((card) => {
          return (
            <div key={card.id}>
              <FeatureCard text={card.text} title={card.title} />;
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
