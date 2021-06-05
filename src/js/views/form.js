class FormValues {
  constructor() {
    this.form = document.querySelector(".currencyForm");
    this.prevInput = document.querySelector(".prevText");
    this.prevNumber = document.querySelector(".prevNumber");
    this.nextInput = document.querySelector(".nextText");
    this.nextNumber = document.querySelector(".nextNumber");
  }
}

const formValues = new FormValues();

export default formValues;
