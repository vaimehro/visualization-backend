const axios = require("axios");
// const url = "https://open.er-api.com/v6/latest/USD";

const url = "https://countriesnow.space/api/v0.1/countries/population/filter";
const fetchData = async () => {
  let fetched = {};
  console.log("######### Fetching Data ###########");
  await axios
    .post(url, {
      limit: 10,
      yr: 2018,
      gt: 140000000,
    })
    .then((response) => {
      fetched = response.data.data;
      console.log("######## Fetched Data ###########");
    })
    .catch((error) => {
      console.log("######## Error Fetchin Data ###########");
      throw error;
    });
  return fetched;
};

module.exports = fetchData;
