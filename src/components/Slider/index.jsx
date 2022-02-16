import PropTypes from "prop-types";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.scss";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Product from "../../features/Products/components/Product";

Slider.propTypes = {
  data: PropTypes.array,
};

function Slider({ data = [] }) {
  return (
    <div className="Slider">
      <div>
        <img
          src="https://cassiopeia.store/svgs/line-left-arrow-black.svg"
          alt=""
        />
        <img
          src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
          alt=""
        />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Product product={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
