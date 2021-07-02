export default class Footer {
  constructor(footer, text) {
    this.footer = footer;
    this.text = text;
  }

  setContent() {
    this.footer.textContent = (`1992-${this._getСurrentYear()} ${this.text}`);
  }

  _getСurrentYear() {
    let year = new Date().getFullYear();
    if (year >= 2021 ) {
      return year;
    }
    else return 2021;
  }
}