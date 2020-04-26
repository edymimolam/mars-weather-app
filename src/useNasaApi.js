import { useEffect, useState } from "react";
import { createSols } from "./createSols";

const URL =
  "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

export function useNasaApi() {
  let [sols, setSols] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setSols(createSols(data));
        setIsLoading(false);
      });
  }, []);

  return { isLoading, sols };
}
