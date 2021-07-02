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

  _sortArrayByYears(array) {
    return array.sort((a, b) => a.year < b.year ? 1 : -1);
  }

  render() {
    this.setYearsHref();
    this._setYearsDataId();
    this.container.innerHTML = '';

    let archiveArray = [];
    let newsArray = [];

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].year === this._getAnchorId() && this.array[i].year != this.numberLastLink) {
        newsArray.push(this.array[i]);
      }
      else if (this.array[i].year <= this.numberLastLink) {
        archiveArray.push(this.array[i]);
      }
    }

    if (this._getAnchorId() > this.numberLastLink) {
      for (let i = 0; i < newsArray.length; i++) {
        newsArray[i].data.forEach((item) => {
          this._addItem(this.createNews(item.date, item.text)._create());
        })
      }
    }

    else {
      for (let i = 0; i < archiveArray.length; i++) {
        this._sortArrayByYears(archiveArray)[i].data.forEach((item) => {
          this._addItem(this.createNews(item.date, item.text)._create());
        })
      }
    }
  }
}