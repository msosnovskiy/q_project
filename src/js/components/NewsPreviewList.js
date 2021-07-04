export default class NewsPreviewList {
  constructor(container, createNewsItem, array, newsPreviewLength) {
    this.container = container;
    this.createNewsItem = createNewsItem;
    this.array = array;
    this.newsPreviewLength = newsPreviewLength;
  }

  _findMaxYear(array) {
    return array.reduce((acc, curr) => acc.year > curr.year ? acc : curr);
  }

  _gettingcСurrentYear() {
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

  render() {
    this.container.innerHTML = '';
    //находим архив новосте актуального года и сортируем его по дате
    let newsPreviewArray = this._sortArrayByDays(this._findMaxYear(this.array));
    //определяем длинну масива до 3 новостей
    newsPreviewArray.length = this.newsPreviewLength;

    //рендер новостей
    newsPreviewArray.forEach(item => {
      this._addItem(this.createNewsItem(item.date, item.text)._create())
    })
  }
}