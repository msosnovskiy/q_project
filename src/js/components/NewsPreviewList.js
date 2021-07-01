export default class NewsPreviewList {
  constructor(container, createNewsItem, array) {
    this.container = container;
    this.createNewsItem = createNewsItem;
    this.array = array;
  }

  _findLastYear() {
    return this.array.reduce((acc, curr) => acc.year > curr.year ? acc : curr);
    
  }

  // _sortArrayByDate(array) {
  //   return array.data.sort((a, b) => a.date.split < b.date ? 1 : -1);
  // }


  render() {
    console.log(this._findLastYear());
  }
}