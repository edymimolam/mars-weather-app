import React from "react";

export default () => (
  <div className="wind">
    <h2 className="section-title">Wind</h2>
    <p className="reading">75 kph</p>

    <div className="wind__direction">
      <p className="sr-only">45deg</p>

      {/* update --direction custom prop
        to change arrow direction  */}
      <div className="wind__arrow"></div>
    </div>
  </div>
);
