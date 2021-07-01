export default class NewsPreview {
  constructor(date, text) {
    this.date = date;
    this.text = text;
  }

  _create() {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news__item');

    const newsDate = document.createElement('h3');
    newsDate.classList.add('news__date');
    newsDate.textContent = this.date;

    const newsText = document.createElement('p');
    newsText.classList.add('news__text');
    newsText.textContent = this.text;

    newsItem.appendChild(newsDate);
    newsItem.appendChild(newsText);

    this.newsElement = newsItem;

    return newsItem;
  }

}