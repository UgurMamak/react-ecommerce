import React, { useState, useEffect, useRef } from "react";

import Isotope from "isotope-layout";

export default function IsotopeReact({ data, filters, children }) {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const inputEl = useRef(null);

  /* useEffect(() => {
    setTimeout(() => {
      setIsotope(
        new Isotope(inputEl.current, {
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        })
      );
    }, 1);
  }, []); */

  /* useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]); */

  useEffect(() => {
    setIsotope(
      new Isotope(inputEl.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      })
    );
  });

  return (
    <div className="isotope-container" ref={inputEl}>
      {data.map((item, index) => (
        <div className="grid-item" key={index}>
          <div className="grid-item__content-wrapper">{children}</div>
        </div>
      ))}
    </div>
  );
}
