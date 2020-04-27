export const createSols = (data) =>
  data.sol_keys.map((key) => ({
    solNum: key,
    date: formatDate(data[key].First_UTC),
    temperature: {
      metricHigh: Math.round(data[key].AT.mx),
      metricLow: Math.round(data[key].AT.mn),
      imperialHigh: cToF(data[key].AT.mx),
      imperialLow: cToF(data[key].AT.mn),
    },
    wind: {
      metricSpeed: mPerSToKmPerH(data[key].HWS.av),
      imperialSpeed: mPerSToMilesPerH(data[key].HWS.av),
      compassDegrees: Math.round(data[key].WD.most_common.compass_degrees),
    },
  }));

const cToF = (c) => Math.round((c * 9) / 5 + 32);

const mPerSToKmPerH = (mPerS) => Math.round(mPerS * 3.6);
const mPerSToMilesPerH = (mPerS) => Math.round(mPerS * 3.6 * 0.61);

const formatDate = (firstDate) => {
  let date = new Date(firstDate);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(date);
};
