import React, { useEffect, useState } from "react";
import axios from "axios";
import Isotope from "isotope-layout";
import ProductCard from "../../components/product-card/ProductCard";

const filtersDefault = [
  { label: "*", isChecked: true },
  { label: "red", isChecked: false },
  { label: "green", isChecked: false },
  { label: "yellow", isChecked: false },
];

function Index(props) {
  const [products, setProducts] = useState([]);
  const [isotope, setIsotope] = useState(null);
  const [filters, updateFilters] = useState(filtersDefault);

  useEffect(() => {
    console.log("FETCH DATA");
    const fetchProductsData = async () => {
      await axios
        .get(`${window.location.origin}/dummy/products.json`)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log("hata", error);
        });
    };

    const fetchData = fetchProductsData();
  }, []);

  useEffect(() => {
    console.log("DUP", products);

    if (products) {
      const initIsotope = async () => {
        console.log("products=", products);

        setIsotope(
          new Isotope(".isotope-container", {
            itemSelector: ".grid-item",
            layoutMode: "fitRows",
          })
        );
        console.log("component Did Mount", isotope);
        window.test = isotope;
      };
      initIsotope();
    }
  }, [products]);

  useEffect(() => {
    if (isotope) {
      const selectedItem = filters.find((x) => x.isChecked === true);
      const selectedLabel = selectedItem ? selectedItem.label : "*";

      console.log("seçili", selectedItem, filters, selectedLabel, isotope);

      setTimeout(() => {
        selectedLabel === "*"
          ? isotope.arrange({ filter: `*` })
          : isotope.arrange({ filter: `.${selectedLabel}` });
      });
    }
  }, [isotope, filters]);

  const onFilter = (event) => {
    console.log("onfilter Run");
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }
        return {
          ...f,
          isChecked: false,
        };
      })
    );
  };

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
                <div className="filters">
                  {filters.map((f) => (
                    <div className="filter" key={`${f.label}_key`}>
                      <input
                        id={f.label}
                        type="radio"
                        value={f.label}
                        onChange={onFilter}
                        checked={f.isChecked}
                      />
                      <label htmlFor={f.label}>{f.label}</label>
                    </div>
                  ))}
                </div>

                <div className="isotope-container">
                  {products.map((product, index) => (
                    <div
                      className={`grid-item ${product.filter[0]}`}
                      key={index}
                    >
                      <div className="grid-item__content-wrapper">
                        <div key={index} className="ps-shoe mb-30">
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

                            <a
                              className="ps-shoe__overlay"
                              aria-label="''"
                              href="product-detail.html"
                            />
                          </div>
                          <div className="ps-shoe__content">
                            <div className="ps-shoe__variants">
                              <div className="ps-shoe__variant normal" />
                              <select className="ps-rating ps-shoe__rating">
                                <option value={1}>1</option>
                                <option value={1}>2</option>
                                <option value={1}>3</option>
                                <option value={1}>4</option>
                                <option value={2}>5</option>
                              </select>
                            </div>
                            <div className="ps-shoe__detail">
                              <a className="ps-shoe__name" href="#">
                                {`${`${index + product.name}  ${
                                  product.filter[0]
                                }`} `}
                              </a>
                              <p className="ps-shoe__categories">
                                <a href="#">{product.categoryName}</a>
                              </p>
                              <span className="ps-shoe__price">
                                <del>£{product.price.oldPrice}</del> £{" "}
                                {product.price.newPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
