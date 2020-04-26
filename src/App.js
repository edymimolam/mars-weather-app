import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useNasaApi } from "./useNasaApi";

const App = () => {
  let { isLoading, sols } = useNasaApi();

  let [unit, setUnit] = useState("Metric");
  const onUnitClick = () =>
    setUnit((u) => (u === "Metric" ? "Imperial" : "Metric"));

  return (
    <Theme>
      <GlobalStyle />
      {console.log(sols)}
      <CurrentWeather unit={unit} onUnitClick={onUnitClick} />
      <PreviousWeather />
    </Theme>
  );
};

export default App;
