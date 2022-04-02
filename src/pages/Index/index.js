import React from "react";

import ProductCard from "../../components/product-card/ProductCard";
import PostCard from "../../components/post-card/PostCard";
import ContactForm from "../../components/contact-form/ContactForm";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ps-main">
        <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
          <div className="ps-container">
            <div className="ps-section__header mb-50">
              <h3 className="ps-section__title" data-mask="features">
                - Features Products
              </h3>
              <ul className="ps-masonry__filter">
                <li className="current">
                  <a href="#" data-filter="*">
                    All <sup>8</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".nike">
                    Nike <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".adidas">
                    Adidas <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".men">
                    Men <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".women">
                    Women <sup>1</sup>
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".kids">
                    Kids <sup>4</sup>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ps-section__content pb-50">
              <div
                className="masonry-wrapper"
                data-col-md={4}
                data-col-sm={2}
                data-col-xs={1}
                data-gap={30}
                data-radio="100%"
              >
                <div className="ps-masonry">
                  <div className="grid-sizer" />
                  <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item nike">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item adidas">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item men">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item women">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                  <div className="grid-item kids">
                    <div className="grid-item__content-wrapper">
                      <ProductCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-section--offer">
          <div className="ps-column">
            <a className="ps-offer" href="product-listing.html">
              <img
                src="skytheme-ecommerce-html5-template/template/images/banner/home-banner-1.png"
                alt=""
              />
            </a>
          </div>
          <div className="ps-column">
            <a className="ps-offer" href="product-listing.html">
              <img
                src="skytheme-ecommerce-html5-template/template/images/banner/home-banner-2.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="ps-section--sale-off ps-section pt-80 pb-40">
          <div className="ps-container">
            <div className="ps-section__header mb-50">
              <h3 className="ps-section__title" data-mask="Sale off">
                - Hot Deal Today
              </h3>
            </div>
            <div className="ps-section__content">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                  <div className="ps-hot-deal">
                    <h3>Nike DUNK Max 95 OG</h3>
                    <p className="ps-hot-deal__price">
                      Only: <span>£155</span>
                    </p>
                    <ul
                      className="ps-countdown"
                      data-time="December 13, 2017 15:37:25"
                    >
                      <li>
                        <span className="hours" />
                        <p>Hours</p>
                      </li>
                      <li className="divider">:</li>
                      <li>
                        <span className="minutes" />
                        <p>minutes</p>
                      </li>
                      <li className="divider">:</li>
                      <li>
                        <span className="seconds" />
                        <p>Seconds</p>
                      </li>
                    </ul>
                    <a className="ps-btn" href="#">
                      Order Today
                      <i className="ps-icon-next" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                  <div className="ps-hotspot">
                    <a className="point first active" href="#">
                      <i className="fa fa-plus" />
                      <div className="ps-hotspot__content">
                        <p className="heading">JUMP TO HEADER</p>
                        <p>
                          Dynamic Fit Collar en la zona del tobillo que une la
                          parte inferior de la pierna y el pie sin reducir la
                          libertad de movimiento.
                        </p>
                      </div>
                    </a>
                    <a className="point second" href="#">
                      <i className="fa fa-plus" />
                      <div className="ps-hotspot__content">
                        <p className="heading">JUMP TO HEADER</p>
                        <p>
                          Dynamic Fit Collar en la zona del tobillo que une la
                          parte inferior de la pierna y el pie sin reducir la
                          libertad de movimiento.
                        </p>
                      </div>
                    </a>
                    <a className="point third" href="#">
                      <i className="fa fa-plus" />
                      <div className="ps-hotspot__content">
                        <p className="heading">JUMP TO HEADER</p>
                        <p>
                          Dynamic Fit Collar en la zona del tobillo que une la
                          parte inferior de la pierna y el pie sin reducir la
                          libertad de movimiento.
                        </p>
                      </div>
                    </a>
                    <img
                      src="skytheme-ecommerce-html5-template/template/images/hot-deal.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-section ps-section--top-sales ps-owl-root pt-80 pb-80">
          <div className="ps-container">
            <div className="ps-section__header mb-50">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 ">
                  <h3 className="ps-section__title" data-mask="BEST SALE">
                    - Top Sales
                  </h3>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <div className="ps-owl-actions">
                    <a className="ps-prev" href="#">
                      <i className="ps-icon-arrow-right" />
                      Prev
                    </a>
                    <a className="ps-next" href="#">
                      Next
                      <i className="ps-icon-arrow-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="ps-section__content">
              <div
                className="ps-owl--colection owl-slider"
                data-owl-auto="true"
                data-owl-loop="true"
                data-owl-speed={5000}
                data-owl-gap={30}
                data-owl-nav="false"
                data-owl-dots="false"
                data-owl-item={4}
                data-owl-item-xs={1}
                data-owl-item-sm={2}
                data-owl-item-md={3}
                data-owl-item-lg={4}
                data-owl-duration={1000}
                data-owl-mousedrag="on"
              >
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
                <div className="ps-shoes--carousel">
                  <ProductCard />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="ps-home-testimonial bg--parallax pb-80"
          data-background="images/background/parallax.jpg"
        >
          <div className="container">
            <div
              className="owl-slider"
              data-owl-auto="true"
              data-owl-loop="true"
              data-owl-speed={5000}
              data-owl-gap={0}
              data-owl-nav="false"
              data-owl-dots="true"
              data-owl-item={1}
              data-owl-item-xs={1}
              data-owl-item-sm={1}
              data-owl-item-md={1}
              data-owl-item-lg={1}
              data-owl-duration={1000}
              data-owl-mousedrag="on"
              data-owl-animate-in="fadeIn"
              data-owl-animate-out="fadeOut"
            >
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail">
                  <img
                    src="skytheme-ecommerce-html5-template/template/images/testimonial/1.jpg"
                    alt=""
                  />
                  <i className="fa fa-quote-left" />
                </div>
                <header>
                  <select className="ps-rating">
                    <option value={1}>1</option>
                    <option value={1}>2</option>
                    <option value={1}>3</option>
                    <option value={1}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <p>Logan May - CEO &amp; Founder Invision</p>
                </header>
                <footer>
                  <p>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
              </div>
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail">
                  <img
                    src="skytheme-ecommerce-html5-template/template/images/testimonial/2.jpg"
                    alt=""
                  />
                  <i className="fa fa-quote-left" />
                </div>
                <header>
                  <select className="ps-rating">
                    <option value={1}>1</option>
                    <option value={1}>2</option>
                    <option value={1}>3</option>
                    <option value={1}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <p>Logan May - CEO &amp; Founder Invision</p>
                </header>
                <footer>
                  <p>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
              </div>
              <div className="ps-testimonial">
                <div className="ps-testimonial__thumbnail">
                  <img
                    src="skytheme-ecommerce-html5-template/template/images/testimonial/3.jpg"
                    alt=""
                  />
                  <i className="fa fa-quote-left" />
                </div>
                <header>
                  <select className="ps-rating">
                    <option value={1}>1</option>
                    <option value={1}>2</option>
                    <option value={1}>3</option>
                    <option value={1}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <p>Logan May - CEO &amp; Founder Invision</p>
                </header>
                <footer>
                  <p>
                    “Dessert pudding dessert jelly beans cupcake sweet caramels
                    gingerbread. Fruitcake biscuit cheesecake. Cookie topping
                    sweet muffin pudding tart bear claw sugar plum croissant. “
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-section ps-home-blog pt-80 pb-80">
          <div className="ps-container">
            <div className="ps-section__header mb-50">
              <h2 className="ps-section__title" data-mask="News">
                - Our Story
              </h2>
              <div className="ps-section__action">
                <a className="ps-morelink text-uppercase" href="#">
                  View all post
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="ps-section__content">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <PostCard />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <PostCard />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                  <PostCard />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ps-home-contact">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Index;
