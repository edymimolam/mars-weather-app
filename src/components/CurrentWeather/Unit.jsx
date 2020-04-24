import React from "react";

export default () => (
  <div className="unit">
    <label htmlFor="cel">°C</label>
    <input type="radio" id="cel" name="unit" checked onChange={() => {}} />
    {/* <!-- when unit__toggle is clicked
      checkbox needs to change --> */}
    <button className="unit__toggle"></button>
    <label htmlFor="fah">°F</label>
    <input type="radio" id="fah" name="unit" onChange={() => {}} />
  </div>
);
