export default class NewsLists {
  constructor(container, array, createNews, anchor, links) {
    this.container = container;
    this.array = array;
    this.createNews = createNews;
    this.anchor = anchor;
    this.links = links;
    this.numberLastLink = '';
  }

  _getAnchorId() {
    return this.anchor.id;
  }

  _setYearsDataId() {
    this.container.id = (this._getAnchorId() + 'Data');
  }

  _getСurrentYear() {
    let year = new Date().getFullYear();
    if (year >= 2021) {
      return year;
    }
    else return 2021;
  }

  setYearsHref() {
    let id = this._getСurrentYear() + 1;

    for (let i = 0; i < this.links.length; i++) {
      id--;
      this.links[i].href = `#${id}`;
      this.links[i].textContent = id;
    }
    this.links.[this.links.length - 1].textContent = 'Архив';
    this.numberLastLink = id;
  }

  _addItem(itemElement) {
    this.container.appendChild(itemElement);
  }

  _sortArrayByDays(array) {
    return array.sort((a, b) => a.date.split('.')[2] + a.date.split('.')[1] + a.date.split('.')[0] < b.date.split('.')[2] + b.date.split('.')[1] + b.date.split('.')[0] ? 1 : -1);
  }

  render() {
    this.setYearsHref();
    this._setYearsDataId();
    this.container.innerHTML = '';
    let newsArray = [];
    let archiveArray = [];

    // формирование массивов новостей исходя из якорной ссылки
    for (let i = 0; i < this.array.length; i++) {
      //массив актуальных новостей
      if (this.array[i].year === this._getAnchorId() && this.array[i].year != this.numberLastLink) {
        newsArray.push(this.array[i]);
      }
      //массив архивных новостей
      else if (this.array[i].year <= this.numberLastLink) {
        archiveArray.push(this.array[i]);
      }
    }

    // рендер новостей, если год больше последней ссылки/архивной
    if (this._getAnchorId() > this.numberLastLink) {
      let sortNewsArray = this._sortArrayByDays(newsArray[0].data);
      sortNewsArray.forEach((item) => {
        this._addItem(this.createNews(item.date, item.text)._create());
      })
    }

    // рендер новостей, для архива
    else {
      let sortArchiveArray = []
      //создаем новый архивный массив и сортируем его по date
      for (let i = 0; i < archiveArray.length; i++) {
        archiveArray[i].data.forEach((item) => {
          sortArchiveArray.push(item);
        })
      }
      //рендер новостей для отсортированного архивного массива
      this._sortArrayByDays(sortArchiveArray).forEach((item) => {
        this._addItem(this.createNews(item.date, item.text)._create());
      });
    }
  }
}