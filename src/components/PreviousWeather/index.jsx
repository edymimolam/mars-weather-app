import React from "react";
import PreviosDay from "./PreviousDay";

export default () => (
  <div className="previous-weather">
    {/* <!-- When clicked, toggle '.show-weather'
     to .previous-weather div --> */}
    <button htmlFor="weather-toggle" className="show-previous-weather">
      <span>&#8593;</span>{" "}
      <span className="sr-only">Show previous weather</span>
    </button>

    <h2 className="main-title previous-weather__title">Previous 7 days</h2>

    <div className="previous-days">
      {new Array(7).fill("something").map(() => (
        <PreviosDay />
      ))}
    </div>
  </div>
);
