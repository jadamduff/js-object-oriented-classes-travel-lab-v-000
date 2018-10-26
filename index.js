class Driver {
  constructor(name, dateStarted) {
    this.name = name;
    this.startDate = new Date(dateStarted);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

}
