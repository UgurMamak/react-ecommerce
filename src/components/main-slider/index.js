/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import createMarkup from "helpers/createMarkup";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

function Index({ mainSlider }) {
  const configSwiper = {
    pagination: { clickable: true },
    modules: [Pagination, Autoplay],
  };

  return (
    <div>
      <Swiper {...configSwiper} className="main-slider">
        {mainSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="img-fluid" src={item.desktop_image} alt="" />
            <div className="main-slider__content">
              <div
                className="tp-caption main-slider__content__header"
                dangerouslySetInnerHTML={createMarkup(item.header)}
              />
              <div
                className="tp-caption main-slider__content__title"
                id="layer21"
              >
                <p className="text-uppercase">{item.title}</p>
              </div>
              <div
                className="tp-caption main-slider__content__description"
                id="layer211"
                dangerouslySetInnerHTML={createMarkup(item.description)}
              />
              <a className="tp-caption ps-btn" id="layer31" href={item.url}>
                Satın Al
                <i className="ps-icon-next" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Index;
