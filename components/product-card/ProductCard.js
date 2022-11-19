/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Rating from "../rating";

function ProductCard({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperParams = {
    modules: [FreeMode, Navigation, Thumbs],
    spaceBetween: 10,
    thumbs:{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }
  };

  const thumbsParams = {
    modules: [FreeMode, Navigation, Thumbs],
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
    navigation: true,
  };

  if (!product) return null;
  return (
    <div>
      <div className="ps-shoe">
        <div className="ps-shoe__thumbnail">
          <div className="ps-badge">
            <span>New</span>
          </div>
          <div className="ps-badge ps-badge--sale ps-badge--2nd">
            <span>-35%</span>
          </div>
          <a className="ps-shoe__favorite" href="#">
            <i className="ps-icon-heart" />
          </a>

          <Swiper
            {...swiperParams}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            className=""
          >
            {product.images.map((item, index) => (
              <SwiperSlide key={index}>
                                <figure>
                  <img src={item} alt={item.imagesAlt} />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <a
            className="ps-shoe__overlay"
            aria-label="''"
            href="product-detail.html"
          />
        </div>
        <div className="ps-shoe__content">
          <div className="ps-shoe__variants">
            <Swiper {...thumbsParams} className="ps-shoe__variant normal">
              {product.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Rating point={product.ratingScore.averageRating} />
          </div>
          <div className="ps-shoe__detail">
            <a className="ps-shoe__name" href="#">
              {`${product.name} ${product.filter[0]}`}
            </a>
            <p className="ps-shoe__categories">
              <a href="#">{product.categoryName}</a>
            </p>
            <span className="ps-shoe__price">
              <del>£{product.price.oldPrice}</del> £ {product.price.newPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
