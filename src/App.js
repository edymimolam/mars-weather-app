import React, { useState } from "react";
import { LoadingSpinner } from "./components/common";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useNasaApi } from "./useNasaApi";

const App = () => {
  let [currentSol, setCurrentSol] = useState(null);
  let { isLoading, sols } = useNasaApi(setCurrentSol);
  let [isMetric, setIsMetric] = useState(true);

  const onUnitClick = () => setIsMetric((isMetric) => !isMetric);
  const onMoreInfoClick = (solNum) => {
    let targetSol = sols.filter((s) => s.solNum === solNum)[0];
    setCurrentSol(targetSol);
  };

  return (
    <Theme>
      <GlobalStyle />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CurrentWeather
            isMetric={isMetric}
            onUnitClick={onUnitClick}
            currentSol={currentSol}
          />
          <PreviousWeather
            isMetric={isMetric}
            onMoreInfoClick={onMoreInfoClick}
            sols={sols}
          />
        </>
      )}
    </Theme>
  );
};

export default App;
