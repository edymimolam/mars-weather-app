import React from "react";
import Date from "./Date";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Info from "./Info";
import Unit from "./Unit";

export default () => (
  <main className="mars-current-weather">
    <h1 className="main-title">Latest weather at Elysium Plantitia</h1>
    <Date />
    <Temperature />
    <Wind />
    <Info />
    <Unit />
  </main>
);
