import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/product-card/ProductCard";
import IsotopeComp from "../../components/isotope";
import Loading from "../../components/loading";

function Index(props) {
  const [isotopeData, setIsotopeData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      await axios
        .get(`${window.location.origin}/dummy/dummy-1.json`)
        .then((response) => {
          setIsotopeData(response.data);
          setFilters(response.data.facets);
        })
        .catch((error) => {});
    };

    fetchProductsData();
  }, []);

  const onFilter = (event) => {
    event.preventDefault();
    const {
      target: {
        dataset: { filter },
      },
    } = event;

    setFilters((state) =>
      state.map((f) => {
        if (f.value === filter) {
          return {
            ...f,
            isChecked: true,
          };
        }
        return {
          ...f,
          isChecked: false,
        };
      })
    );
  };

  const getIsotope = () => {
    if (isotopeData.length <= 0) return null;
    return (
      <IsotopeComp data={isotopeData.products} filters={filters}>
        {isotopeData.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </IsotopeComp>
    );
  };

  if (isotopeData.length <= 0) return <Loading />;

  return (
    <div className="ps-main">
      <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
        <div className="ps-container">
          <div className="ps-section__header mb-50">
            <h3 className="ps-section__title" data-mask={isotopeData.maskTitle}>
              - {isotopeData.title}
            </h3>
            <ul className="ps-masonry__filter">
              {filters.map((f, index) => (
                <li className={f.isChecked ? "current" : ""} key={index}>
                  <a href="#" onClick={onFilter} data-filter={f.value}>
                    {f.label}{" "}
                    <sup>
                      {f.value === "*"
                        ? isotopeData.products.length
                        : isotopeData.products
                            .map((product) => {
                              const b = product.filter.filter(
                                (x) => x === f.value
                              ).length;
                              return b;
                            })
                            .reduce((a, b) => a + b, 0)}
                    </sup>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="ps-section__content pb-50">
            <div
              className="ugur-test masonry-wrapper"
              data-col-md={4}
              data-col-sm={2}
              data-col-xs={1}
              data-gap={30}
              data-radio="100%"
            >
              {getIsotope()}
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
    </div>
  );
}

export default Index;
