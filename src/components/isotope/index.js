import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";

function Index({ children, data, filters }) {
  const [isotope, setIsotope] = useState(null);
  const istotopeContainer = useRef(null);

  useEffect(() => {
    const initIsotope = async () => {
      setIsotope(
        new Isotope(istotopeContainer.current, {
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        })
      );
    };
    initIsotope();
  }, [data]);

  useEffect(() => {
    if (isotope) {
      const selectedItem = filters.find((x) => x.isChecked === true);
      const selectedValue = selectedItem ? selectedItem.value : "*";

      selectedValue === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${selectedValue}` });
    }
  }, [filters]);

  return (
    <div ref={istotopeContainer} className="isotope-container">
      {children.map((item, index) => (
        <div className={`grid-item ${data[index].filter[0]}`} key={index}>
          <div className="grid-item__content-wrapper">{item}</div>
        </div>
      ))}
    </div>
  );
}

export default Index;
