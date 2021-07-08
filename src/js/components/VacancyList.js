export default class VacancyList {
  constructor(container, createVacancy, vacancySchema, array) {
    this.container = container;
    this.createVacancy = createVacancy;
    this.vacancySchema = vacancySchema;
    this.array = array;
  }
  _addItem(itemElement) {
    this.container.appendChild(itemElement);
  }

  render() {
    this.container.innerHTML = '';
    if (this.array.length > 0) {
      this.array.forEach((item) => {
        this._addItem(this.createVacancy(item.vacancy, this.vacancySchema.experience, item.experience, item.employment, this.vacancySchema.qualification, item.qualification.data, this.vacancySchema.responsibilities, item.responsibilities.data, this.vacancySchema.conditions, item.conditions.data)._create());
      })
    }
    else {
      console.log('нет вакансий')
    }
  }
}