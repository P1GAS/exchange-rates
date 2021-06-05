import axios from "axios";

import config from "../config/apiConfig";
import ratioOfCurrencies from "../store/ratioOfCurrencies";

class Courses {
  constructor(config) {
    this.url = config.url;
    this.apiKey = config.apiKey;
  }

  async getCurrency(prevInputValue, nextInputValue) {
    const response = await axios
      .get(
        `${this.url}?fsym=${prevInputValue || "BTC"}&tsyms=${
          nextInputValue || "USD"
        },?${this.apiKey}`
      ).then(currency => ratioOfCurrencies.hasCurrencyWarning(currency.data))
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

const courses = new Courses(config);

export default courses;
