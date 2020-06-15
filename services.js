const axios = require("axios");

//aparently the API key is not needed
const API_KEY =
  "8ef8e51b8cad771098890e57134e9a4047d60184a54bab7b4121faf8acf39660";
const API_URL = "https://min-api.cryptocompare.com/data/price?";

const defaultCurrencies = ["BRL"];

const getCoinPrice = async (
  cryptoCoin = "ETH",
  currencyList = defaultCurrencies
) => {
  const currencies = currencyList.join(",");
  
  let price

  try {
    price = await axios.get(
      API_URL + `fsym=${cryptoCoin}` + `&tsyms=${currencies}`
    );
  } catch (err) {
    console.log("error");
    console.log(err);
  }

  return price;
};

module.exports = {
  getCoinPrice
};
