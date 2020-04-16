const baseUrl = "https://covid19-api.com";

export const getAllCountriesReport = (todaysDate) => {
  return `${baseUrl}/report/country/all?date=${todaysDate}&date-format=YYYY-MM-DD&format=json`;
};
export const getTotalReport = (todaysDate) => {
  return `${baseUrl}/report/totals?date=${todaysDate}&date-format=YYYY-MM-DD&format=json`;
};
