import { useEffect, useState } from "react";
import { createSols } from "./createSols";

const URL =
  "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

export function useNasaApi(setCurrentSol) {
  let [sols, setSols] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let _sols = createSols(data);
        setSols(_sols);
        setCurrentSol(_sols[_sols.length - 1]);
        setIsLoading(false);
      });
  }, [setCurrentSol]);

  return { isLoading, sols };
}
