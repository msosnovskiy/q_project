export default class NewsLists {
  constructor(container, array, createNews, anchor, links, emptyMessage) {
    this.container = container;
    this.array = array;
    this.createNews = createNews;
    this.anchor = anchor;
    this.links = links;
    this.emptyMessage = emptyMessage;
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

  _sortArrayByDate(array) {
    return array.sort((a, b) => a.date.split('.')[2] + a.date.split('.')[1] + a.date.split('.')[0] < b.date.split('.')[2] + b.date.split('.')[1] + b.date.split('.')[0] ? 1 : -1);
  }

  _getNewsArray(array) {
    let newsArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].year === this._getAnchorId() && array[i].year != this.numberLastLink) {
        array[i].data.forEach((item) => {
          newsArray.push(item);
        });
      }
    }
    return newsArray;
  }

  _getArchiveArray(array) {
    let archiveArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].year <= this.numberLastLink) {
        array[i].data.forEach((item) => {
          archiveArray.push(item);
        });
      }
    }
    return archiveArray;
  }

  render() {
    this.setYearsHref();
    this._setYearsDataId();
    this.container.innerHTML = '';

    // рендер новостей, если год больше последней/архивной ссылки
    if (this._getAnchorId() > this.numberLastLink) {
      if (this._sortArrayByDate(this._getNewsArray(this.array)).length > 0) {
      this._sortArrayByDate(this._getNewsArray(this.array)).forEach((item) => {
        this._addItem(this.createNews(item.date, item.text)._create());
      })
      }
      else {
        this._addItem(this.createNews()._createEmpty(this.emptyMessage));
      }
    }
    // рендер новостей для архива
    else {
      this._sortArrayByDate(this._getArchiveArray(this.array)).forEach((item) => {
        this._addItem(this.createNews(item.date, item.text)._create());
      })
    }
  }
}