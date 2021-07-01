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

  render() {
    this.setYearsHref();
    this._setYearsDataId();
    this.container.innerHTML = '';
    const activeLinhs = this.links.length - 1;
    console.log(activeLinhs);
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].year <= (this._gettingYear() - activeLinhs)) {
        console.log(this.array[i]);
        
      }
    }

    
  }

}