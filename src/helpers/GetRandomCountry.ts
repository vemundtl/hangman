export const getRandomCountry = () => {
  const axios = require("axios");

  const getRandomNumber: number = Math.floor(Math.random() * (250 + 1));

  const options = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };
  axios
    .request(options)
    .then(function (respons: any) {
      return respons.data[getRandomNumber].name.common.toString();
    })
    .catch(function (error: any) {
      console.error(error);
    });
};
