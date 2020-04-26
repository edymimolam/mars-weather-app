export const createSols = (data) =>
  data.sol_keys.map((key) => ({
    solNum: key,
    date: formatDate(data[key].First_UTC),
    metricHightTemp: Math.round(data[key].AT.mx),
    metricLowTemp: Math.round(data[key].AT.mn),
    metricWindSpeed: mPerSToKmPerH(data[key].HWS.av),
    imperialHightTemp: cToF(data[key].AT.mx),
    imperialLowTemp: cToF(data[key].AT.mn),
    imperialWindSpeed: mPerSToMilesPerH(data[key].HWS.av),
    windDirection: Math.round(data[key].WD.most_common.compass_degrees),
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
