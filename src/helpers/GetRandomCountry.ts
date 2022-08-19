export const getRandomCountry = () => {
  const axios = require("axios");

  const randomNumber: number = Math.floor(Math.random() * (250 + 1));

  return axios
    .get("https://restcountries.com/v3.1/all")
    .then(function (response: { data: { name: { common: any } }[] }) {
      return response.data[randomNumber].name.common;
    });
};
