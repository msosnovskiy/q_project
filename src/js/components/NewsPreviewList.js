export default class NewsPreviewList {
  constructor(container, createNewsItem, moreButton, array) {
    this.container = container;
    this.createNewsItem = createNewsItem;
    this.moreButton = moreButton;
    this.array = array;
    this.newsPreviewLength = 3;
  }

  _gettingСurrentYear() {
    let year = new Date().getFullYear();
    if (year >= 2021) {
      return year;
    }
    else return 2021;
  }

  _sortArrayByDate(array) {
    return array.data.sort((a, b) => a.date.split('.')[2] + a.date.split('.')[1] + a.date.split('.')[0] < b.date.split('.')[2] + b.date.split('.')[1] + b.date.split('.')[0] ? 1 : -1);
  }

  _findArrayByYear = (array, value) => array.filter((item) => {
    return item.year == value;
  })[0];

  _addItem(itemElement) {
    this.container.appendChild(itemElement);
  }

  _setHrefOnButton() {
    return this.moreButton.href = `news.html#${this._gettingСurrentYear()}`
  }

  _getWindowWidth() {
    return window.innerWidth;
  }

  _setNewsPreviewLength() {

    this._getWindowWidth() > 1300 ? this.newsPreviewLength = 3 : this.newsPreviewLength = 4;
  }

  render() {
    this.container.innerHTML = '';
    this._setHrefOnButton();
    this._setNewsPreviewLength()
    let stepYear = 0;

    //проверка на наличие данных за текущий год в массиве, если нет - проверяем следующий год
    while ((this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear) === undefined)) {
      stepYear++;
    }
    // рендер новостей для заданной newsPreviewLength
    while (this.newsPreviewLength > 0 && (this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear) != undefined)) {
      let newsPreviewArray = this._sortArrayByDate(this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear));
      stepYear++;
      newsPreviewArray.forEach((item) => {
        if (this.newsPreviewLength > 0) {
          this._addItem(this.createNewsItem(item.date, item.text)._create());
          this.newsPreviewLength--;
        }
      })
      if (!this.newsPreviewLength || (this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear) == undefined)) {
        while ((this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear) === undefined)) {
          stepYear++;
        }
      };
    }

    if ((this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear) === undefined)) {
      stepYear++;
    }
  }

  setEventListener() {
    window.addEventListener(`resize`, event => {
      this.render();
    }, false);
  }
}