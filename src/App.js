import React from "react";
import CurrentWeather from "./components/CurrentWeather";
import PreviousWeather from "./components/PreviousWeather";
import { Theme, GlobalStyle } from "./style";
import { useNasaApi } from "./useNasaApi";

const App = () => {
  let { isLoading, sols, setSols } = useNasaApi();
  console.log("App -> isLoading, sols", isLoading, sols);

  return (
    <Theme>
      <GlobalStyle />
      <CurrentWeather />
      <PreviousWeather />
    </Theme>
  );
};

export default App;
