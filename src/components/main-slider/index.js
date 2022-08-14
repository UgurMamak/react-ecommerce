import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Index() {
  return (
    <div>
      <Swiper pagination modules={[Pagination]} className="">
        <SwiperSlide>
          <img
            className="img-fluid"
            src="skytheme-ecommerce-html5-template/template/images/slider/3.jpg"
            alt=""
          />
          <div className="tp-caption ps-banner__header">
            <p>
              March 2002 <br />
              Nike SB Dunk Low Pro
            </p>
          </div>
          <div className="tp-caption ps-banner__title" id="layer21">
            <p className="text-uppercase">SUBA</p>
          </div>
          <div className="tp-caption ps-banner__description" id="layer211">
            <p>
              Supa wanted something that was going to rep his East Coast
              <br />
              roots and, more specifically, his hometown of <br />
              New York City in a big way.
            </p>
          </div>
          <a className="tp-caption ps-btn" id="layer31" href="#">
            Purchase Now
            <i className="ps-icon-next" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Index;
