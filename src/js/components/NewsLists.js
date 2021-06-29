export default class NewsLists {
  constructor(container, array, createNews, anchor) {
    this.container = container;
    this.array = array;
    this.createNews = createNews;
    this.anchor = anchor;
  }

  _getYearsId() {
    return this.anchor.id;
  }

  _setYearsDataIt() {
    this.container.id = (this._getYearsId() + 'Data');
  }

  _addItem(itemElement) {
    this.container.appendChild(itemElement);
  }

  render() {
    this._setYearsDataIt();
    this.container.innerHTML = '';
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].year === this._getYearsId()) {
        this.array[i].data.forEach((item) => 
        this._addItem(this.createNews(item.date, item.text)._create()));
      }
    }
  }
}