export default class Vacancy {
  constructor(vacancy, experienceSchema, experienceText, employmentText, qualificationSchema, qualificationData, responsibilitiesSchema, responsibilitiesData, conditionsSchema, conditionsData) {
    this.vacancy = vacancy;
    this.experienceSchema = experienceSchema;
    this.experienceText = experienceText;
    this.employmentText = employmentText;
    this.qualificationSchema = qualificationSchema;
    this.qualificationData = qualificationData;
    this.responsibilitiesSchema = responsibilitiesSchema;
    this.responsibilitiesData = responsibilitiesData;
    this.conditionsSchema = conditionsSchema;
    this.conditionsData = conditionsData;
  }

  _createDOMElement(tag, cls) {
    let elem = document.createElement(`${tag}`);
    elem.classList.add(`${cls}`);
    return elem;
  }

  _createDOMElements(array, tag, cls, container) {
    array.forEach((item) => {
      let elem = this._createDOMElement(`${tag}`, `${cls}`);
      container.appendChild(elem);
      elem.textContent = item.text;
      return elem;
    })
  }

  _create() {
    const spoilerItem = this._createDOMElement('div', 'spoiler__item')
    spoilerItem.classList.add('spoiler__item_white');
    const wrapper = this._createDOMElement('div', 'spoiler__wrapper')
    wrapper.classList.add('spoiler__wrapper_white');
    const vacancy = this._createDOMElement('h3', 'spoiler__title')
    const spoilerButton = this._createDOMElement('button', 'spoiler__button')
    const content = this._createDOMElement('div', 'spoiler__content')
    content.classList.add('spoiler__content_white');
    const experience = this._createDOMElement('h3', 'spoiler__subtitle')
    const experienceYears = this._createDOMElement('span', 'span')
    experienceYears.classList.add('span_light');
    const employment = this._createDOMElement('p', 'spoiler__text')
    const qualification = this._createDOMElement('h3', 'spoiler__subtitle')
    const responsibilities = this._createDOMElement('h3', 'spoiler__subtitle')
    const conditions = this._createDOMElement('h3', 'spoiler__subtitle')

    this.wrapper = wrapper;
    this.button = spoilerButton;
    this.content = content;

    spoilerItem.appendChild(wrapper);
    spoilerItem.appendChild(content);

    wrapper.appendChild(vacancy);
    vacancy.textContent = this.vacancy;
    wrapper.appendChild(spoilerButton);

    content.appendChild(experience);
    experience.textContent = this.experienceSchema;

    experience.appendChild(experienceYears);
    experienceYears.textContent = this.experienceText;

    content.appendChild(employment);
    employment.textContent = this.employmentText;

    content.appendChild(qualification);
    qualification.textContent = this.qualificationSchema;

    this._createDOMElements(this.qualificationData, 'p', 'spoiler__list', this.content);

    content.appendChild(responsibilities);
    responsibilities.textContent = this.responsibilitiesSchema;

    this._createDOMElements(this.responsibilitiesData, 'p', 'spoiler__list', this.content);

    content.appendChild(conditions);
    conditions.textContent = this.conditionsSchema;

    this._createDOMElements(this.conditionsData, 'p', 'spoiler__list', this.content);

    this._setEventListener();

    return spoilerItem;
  }
  
  _createEmpty(message) {
    const vacancy = this._createDOMElement('h3', 'empty-message');
    vacancy.textContent = message;
    return vacancy;
  }

  _itsOpened(e) {
    if (e.classList.contains('spoiler__content_visible')) {
      return true;
    } else return false;
  }

  _openSpoiler(e, openingСlass) {
    e.classList.add(openingСlass);
  }

  _closeSpoiler(e, coverСlass) {
    e.classList.remove(coverСlass);
  }

  _setEventListener() {
    this.wrapper.addEventListener('click', () => {
      if (this._itsOpened(this.content)) {
        this._closeSpoiler(this.button, 'spoiler__button_active');
        this._closeSpoiler(this.content, 'spoiler__content_visible');
      }
      else {
        this._openSpoiler(this.button, 'spoiler__button_active');
        this._openSpoiler(this.content, 'spoiler__content_visible');
      }
    })
  }
}