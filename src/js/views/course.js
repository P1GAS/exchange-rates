class CourseUI {
  constructor() {
    this.docWrapper = document.querySelector(".currencyWrapper");
  }

  clearCurrencyCourse() {
    this.clearContainer();

    return {
      showEmptyMsg: this.showEmptyMsg,
      showSuccesResult: this.showSuccesResult,
    };
  }

  clearContainer() {
    this.docWrapper.innerHTML = "";
  }

  showEmptyMsg = () => {
    const template = CourseUI.emptyMsgTemplate();
    this.docWrapper.insertAdjacentHTML("afterbegin", template);
  };

  showSuccesResult = (currencyName, currencyCourse) => {
    const template = `
      <h3 class="currencyInfo">${currencyName}: ${currencyCourse}</h3>`;
    this.docWrapper.insertAdjacentHTML("afterbegin", template);
  };

  static emptyMsgTemplate() {
    return `
    <div>
    <h3>Currency not found</h3>
    </div>`;
  }
}

const courseUI = new CourseUI();
export default courseUI;
