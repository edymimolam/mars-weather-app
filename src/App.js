import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useNasaApi } from "./useNasaApi";

const App = () => {
  let [currentSol, setCurrentSol] = useState(null);
  let { isLoading, sols } = useNasaApi(setCurrentSol);

  let [isMetric, setIsMetric] = useState(true);
  const onUnitClick = () => setIsMetric((isMetric) => !isMetric);

  return (
    <Theme>
      <GlobalStyle />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CurrentWeather
            isMetric={isMetric}
            onUnitClick={onUnitClick}
            currentSol={currentSol}
          />
          <PreviousWeather />
        </>
      )}
    </Theme>
  );
};

export default App;
