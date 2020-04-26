import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";

const App = () => (
  <Theme>
    <GlobalStyle />
    <CurrentWeather />
    <PreviousWeather />
  </Theme>
);

export default App;
