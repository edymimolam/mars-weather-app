import { useEffect, useState } from "react";

const URL =
  "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

export function useNasaApi() {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return data;
}
