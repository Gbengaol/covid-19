const baseUrl = "https://covid19-api.com";

const date = new Date();
const month = () => {
  if (date.getMonth().toString().length === 1) {
    return `0${date.getMonth() + 1}`;
  } else {
    return date.getMonth() + 1;
  }
};
const todaysDate = `${date.getFullYear()}-${month()}-${date.getDate() - 1}`;

export const getAllCountriesReport = `${baseUrl}/report/country/all?date=${todaysDate}&date-format=YYYY-MM-DD&format=json`;
export const getTotalReport = `${baseUrl}/report/totals?date=${todaysDate}&date-format=YYYY-MM-DD&format=json`;
