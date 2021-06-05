import courses from "./services/apiService";
import formValues from "./views/form";
import ratioOfCurrencies from "./store/ratioOfCurrencies";
import "./plugins";
import "../css/style.css";

const form = formValues.form;

const prevInput = formValues.prevInput;
const prevNumber = formValues.prevNumber;
const nextInput = formValues.nextInput;
const nextNumber = formValues.nextNumber;

document.addEventListener("DOMContentLoaded", () => {
  courses.getCurrency();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const prevInputValue = prevInput.value;
    const nextInputValue = nextInput.value;

    courses.getCurrency(prevInputValue, nextInputValue);
  });

  prevNumber.addEventListener("input", () => {
    const prevNumberValue = prevNumber.value;
    nextNumber.value = ratioOfCurrencies.countNextValue(prevNumberValue);
  });

  nextNumber.addEventListener("input", () => {
    const nextNumberValue = nextNumber.value;
    prevNumber.value = ratioOfCurrencies.countPrevValue(nextNumberValue);
  });
});
