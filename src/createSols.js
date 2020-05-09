export const createSols = (data, lang) =>
  data.sol_keys.map((key) => ({
    solNum: key,
    date: formatDate(data[key].First_UTC, lang),
    temperature: {
      metricHigh: Math.round(+!!data[key].AT && data[key].AT.mx),
      metricLow: Math.round(+!!data[key].AT && data[key].AT.mn),
      imperialHigh: cToF(+!!data[key].AT && data[key].AT.mx),
      imperialLow: cToF(+!!data[key].AT && data[key].AT.mn),
    },
    wind: {
      metricSpeed: mPerSToKmPerH(+!!data[key].HWS && data[key].HWS.av),
      imperialSpeed: mPerSToMilesPerH(+!!data[key].HWS && data[key].HWS.av),
      compassDegrees: Math.round(
        +!!data[key].WD && data[key].WD.most_common.compass_degrees
      ),
    },
  }));

const cToF = (c = 0) => Math.round((c * 9) / 5 + 32);

const mPerSToKmPerH = (mPerS = 0) => Math.round(mPerS * 3.6);
const mPerSToMilesPerH = (mPerS = 0) => Math.round(mPerS * 3.6 * 0.61);

const formatDate = (firstDate, lang) => {
  let date = new Date(firstDate);
  return new Intl.DateTimeFormat(lang, {
    month: "long",
    day: "numeric",
  }).format(date);
};
