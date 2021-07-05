export default class NewsPreviewList {
  constructor(container, createNewsItem, array, newsPreviewLength) {
    this.container = container;
    this.createNewsItem = createNewsItem;
    this.array = array;
    this.newsPreviewLength = newsPreviewLength;
  }

  _gettingСurrentYear() {
    let year = new Date().getFullYear();
    if (year >= 2021) {
      return year;
    }
    else return 2021;
  }

  _sortArrayByDays(array) {
    return array.data.sort((a, b) => a.date.split('.')[2] + a.date.split('.')[1] + a.date.split('.')[0] < b.date.split('.')[2] + b.date.split('.')[1] + b.date.split('.')[0] ? 1 : -1);
  }

  _addItem(itemElement) {
    this.container.appendChild(itemElement);
  }

  // _findMaxYear(array) {
  //   return array.reduce((acc, curr) => acc.year > curr.year ? acc : curr);
  // }

  // _getItemForRender(array, count) {
  //   for (let i = 0; i < count; i++) {
  //     // return this._sortArrayByDays(array)[i];
  //   }
  // }

  _findArrayByYear = (array, value) => array.filter((item) => {
    return item.year == value;
  })[0]

  render() {
    this.container.innerHTML = '';
    let stepYear = 0;

    while (this.newsPreviewLength > 0) {
      let newsPreviewArray = this._sortArrayByDays(this._findArrayByYear(this.array, this._gettingСurrentYear() - stepYear));
      stepYear++;
      newsPreviewArray.forEach((item) => {
        if (this.newsPreviewLength > 0) {
          this._addItem(this.createNewsItem(item.date, item.text)._create());
          this.newsPreviewLength--;
        }
      })
      if (!this.newsPreviewLength) break;
    }
  }
}