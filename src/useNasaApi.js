import { useEffect, useState } from "react";

const URL =
  "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

export function useNasaApi() {
  let [sols, setSols] = useState({});
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        let sols = json.sol_keys.map((key) => {
          let date = new Date(json[key].First_UTC);

          return {
            solNum: key,
            date: new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
            }).format(date),
            hightTemp: Math.round(json[key].AT.mx),
            lowTemp: Math.round(json[key].AT.mn),
            windSpeed: Math.round((json[key].HWS.av * 18) / 5), // m/sec to km/hr
            windDirection: Math.round(json[key].WD.most_common.compass_degrees),
          };
        });

        setSols(sols);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, sols, setSols };
}
