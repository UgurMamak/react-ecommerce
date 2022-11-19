import React, { useState, useEffect } from "react";

import Isotope from "isotope-layout";

/* function IsotopeReact() {
  // init one ref to store the future isotope object
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <ul>
        <li onClick={handleFilterKeyChange("*")}>Show Both</li>
        <li onClick={handleFilterKeyChange("vege")}>Show Veges</li>
        <li onClick={handleFilterKeyChange("fruit")}>Show Fruits</li>
      </ul>
      <hr />
      <ul className="filter-container">
        <div className="filter-item vege">
          <span>Cucumber</span>
        </div>
        <div className="filter-item fruit">
          <span>Apple</span>
        </div>
        <div className="filter-item fruit">
          <span>Orange</span>
        </div>
        <div className="filter-item fruit vege">
          <span>Tomato</span>
        </div>
      </ul>
    </>
  );
}

export default IsotopeReact; */

export default function IsotopeReact() {
  const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState("*");

  React.useEffect(() => {
    setIsotope(
      new Isotope(".container", {
        itemSelector: ".item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  React.useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <div className="filters">
        <a href="#" className="btn active" onClick={() => setFilterKey("*")}>
          All
        </a>
        <a
          href="#"
          className="btn filter"
          onClick={() => setFilterKey("green")}
        >
          Green
        </a>
        <a
          href="#"
          className="btn filter"
          onClick={() => setFilterKey("orange")}
        >
          Orange
        </a>
        <a
          href="#"
          className="btn filter"
          onClick={() => setFilterKey("purple")}
        >
          Purple
        </a>
      </div>

      <div className="container">
        <div className="item green" />
        <div className="item orange" />
        <div className="item orange" />
        <div className="item green" />
        <div className="item green" />
        <div className="item purple" />
        <div className="item green" />
        <div className="item purple" />
        <div className="item purple" />
        <div className="item orange" />
      </div>
    </>
  );
}
