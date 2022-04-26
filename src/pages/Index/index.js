import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/product-card/ProductCard";

import IsotopeComp from "../../components/isotope";

const filtersDefault = [
  { label: "All", value: "*", isChecked: true },
  { label: "red", value: "red", isChecked: false },
  { label: "green", value: "green", isChecked: false },
  { label: "yellow", value: "yellow", isChecked: false },
];

function Index(props) {
  const [products, setProducts] = useState([]);
  const [filters, updateFilters] = useState(filtersDefault);

  useEffect(() => {
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

    fetchProductsData();
  }, []);

  const onFilter = (event) => {
    event.preventDefault();
    const {
      target: {
        value,
        checked,
        dataset: { filter },
      },
    } = event;

    updateFilters((state) =>
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

  return (
    <div className="ps-main">
      <div className="ps-section--features-product ps-section masonry-root pt-100 pb-100">
        <div className="ps-container">
          <div className="ps-section__header mb-50">
            <h3 className="ps-section__title" data-mask="features">
              - Features Products
            </h3>
            <ul className="ps-masonry__filter">
              {filters.map((f, index) => (
                <li className={f.isChecked ? "current" : ""} key={index}>
                  <a href="#" onClick={onFilter} data-filter={f.value}>
                    {f.label} <sup>8</sup>
                  </a>
                </li>
              ))}
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
              <IsotopeComp data={products} filters={filters}>
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </IsotopeComp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
