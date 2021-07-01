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

  _gettingYear() {
    let year = new Date().getFullYear();
    if (year >= 2021) {
      return year;
    }
    else return 2021;
  }

  setYearsHref() {
    let id = this._gettingYear() + 1;
    // this.links.[this.links.length - 1].href = '#archive';

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

  _getActualData() {
    let years = this._gettingYear();
    let newsArray = [];
    for (let i = 0; i < this.links.length - 1; i++) {
      if (this.array[i].year = years);
      newsArray.push(this.array[i]);
      years--;
    }
    return newsArray;
  }

  _getArchiveArray() {
    let activeLinhs = this.links.length - 1;
    let archiveArray = []
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].year <= (this._gettingYear() - activeLinhs)) {
        archiveArray.push(this.array[i]);
      }
    }
    return archiveArray;
  }

  _sortArrayByYears(array) {
    return array.sort((a, b) => a.year < b.year ? 1 : -1);
  }

  render() {
    this.setYearsHref();
    this._setYearsDataId();
    this.container.innerHTML = '';

    console.log(this._sortArrayByYears(this._getArchiveArray()));
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].year === this._getAnchorId()) {
        this.array[i].data.forEach((item) => {
          this._addItem(this.createNews(item.date, item.text)._create());
        })
      }
    }
  }
}