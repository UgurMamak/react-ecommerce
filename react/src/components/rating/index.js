import React, { useEffect, useState } from "react";
import "./index.scss";

function Index({ point }) {
  const [truncNumber, setTruncNumber] = useState(0);
  const [ratingFloat, setRatingFloat] = useState(0);
  const ratingCalculator = () => {
    const truncNumber = Math.trunc(point); // gövde
    const floatNumber = Number((point - truncNumber).toFixed(2)); // ondalık
    setTruncNumber(truncNumber);
    setRatingFloat(floatNumber * 100);
  };

  useEffect(() => {
    ratingCalculator();
  }, [point]);
  return (
    <div className="rating-wrapper">
      <div className="ratings-content">
        {[...Array(5).keys()].map((item, index) => (
          <div className="rating-item" key={index}>
            <div className="empty" />
            {index < truncNumber ? (
              <div className="full" style={{ width: "100%" }} />
            ) : (
              ""
            )}

            {ratingFloat > 0 && truncNumber === index ? (
              <div className="full" style={{ width: `${ratingFloat}%` }} />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Index;
