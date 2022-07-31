import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";

function Index({ children, data, filters }) {
  const [isotope, setIsotope] = useState(null);
  const istotopeContainer = useRef(null);

  useEffect(() => {
    console.log("setIsotope Effect");
    imagesLoaded(
      document.querySelector(".isotope-container"),

      (instance) => {
        console.log("all images are loaded");
        document.querySelector(".isotope-container").classList.remove("d-none");
        setIsotope(
          new Isotope(istotopeContainer.current, {
            itemSelector: ".grid-item",
            layoutMode: "fitRows",
          })
        );
      }
    );
    /* setIsotope(
      new Isotope(istotopeContainer.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      })
    ); */
  }, [data]);

  useEffect(() => {
    console.log("filters Effect");
    if (isotope) {
      const selectedItem = filters.find((x) => x.isChecked === true);
      const selectedValue = selectedItem ? selectedItem.value : "*";

      selectedValue === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${selectedValue}` });
    }
  }, [filters]);

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, []);

  if (children.length <= 0) return null;

  return (
    <div ref={istotopeContainer} className="isotope-container d-none">
      {children.map((item, index) => (
        <div className={`grid-item ${data[index].filter[0]}`} key={index}>
          <div className="grid-item__content-wrapper">{item}</div>
        </div>
      ))}
    </div>
  );
}

export default Index;
