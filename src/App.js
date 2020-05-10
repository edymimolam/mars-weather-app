import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "./components/common";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useTranslation } from "react-i18next";
import { useNasaApi } from "./useNasaApi";
import { createSols } from "./createSols";

const App = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [sols, setSols] = useState(null);
  let [currentSol, setCurrentSol] = useState(null);
  let [isMetric, setIsMetric] = useState(true);
  let [lang, setLang] = useState("en");
  let { i18n } = useTranslation();

  let data = useNasaApi();

  useEffect(() => {
    if (data) {
      setSols(createSols(data, lang));
    }
  }, [data, lang]);

  useEffect(() => {
    if (sols) {
      setCurrentSol(sols[sols.length - 1]);
      setIsLoading(false);
    }
  }, [sols]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const onLangClick = () => setLang((lang) => (lang === "en" ? "ru" : "en"));
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
            onLangClick={onLangClick}
            lang={lang}
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
