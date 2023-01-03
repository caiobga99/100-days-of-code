//Convert Age to Days.

const readlineSync = require("readline-sync");
class ConvertAgeToDays {
  constructor(age) {
    this.age = age;
  }

  ageToDays() {
    if (typeof this.age !== "number" || this.age <= 0) {
      return "Check to age";
    }
    return this.age * 365;
  }
}

const newAgetoDays = new ConvertAgeToDays(
  Number(readlineSync.question("Informe uma idade \n"))
);
console.log(newAgetoDays.ageToDays());
