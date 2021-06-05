import courseUI from "../views/course";
import courses from "../services/apiService";

class RatioOfCurrencies {
  constructor() {
    this.prevCurrency = null;
    this.nextCurrency = null;
  }

   hasCurrencyWarning(currency) {
    if (currency.HasWarning !== undefined) {
      return courseUI.checkCurrencyCourse().showEmptyMsg();
    }

    for (const key in currency) {
      courseUI.clearCurrencyCourse().showSuccesResult(key, currency[key]);
      return ratioOfCurrencies.setRatio(currency[key]);
    }
  }

  setRatio(currency) {
    this.prevCurrency = currency;
    this.nextCurrency = +((1 / currency) * 1);
  }

  countNextValue(prevInputValue) {
    return prevInputValue * this.prevCurrency;
  }

  countPrevValue(nextInputValue) {
    return nextInputValue * this.nextCurrency;
  }
}

const ratioOfCurrencies = new RatioOfCurrencies();

export default ratioOfCurrencies;
