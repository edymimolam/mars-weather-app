import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "./components/common";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useNasaApi } from "./useNasaApi";
import { createSols } from "./createSols";

const App = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [sols, setSols] = useState(null);
  let [currentSol, setCurrentSol] = useState(null);
  let [isMetric, setIsMetric] = useState(true);

  let data = useNasaApi();

  useEffect(() => {
    if (data) {
      setSols(createSols(data));
    }
  }, [data]);

  useEffect(() => {
    if (sols) {
      setCurrentSol(sols[sols.length - 1]);
      setIsLoading(false);
    }
  }, [sols]);

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
