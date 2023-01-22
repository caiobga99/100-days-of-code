const readlineSync = require("readline-sync");
class MarcioMellosChallenge {
  constructor(area) {
    this.area = area;
  }
  fields() {
    const fieldArea = (105 * 68) / 1000;
    const deforested = this.area / fieldArea;
    const result = deforested - Math.floor(deforested);
    const message =
      result === 0
        ? `The deforested area corresponds exactly to ${Math.floor(
            deforested
          )} soccer fields`
          ? result < 0.5
          : `The deforested area corresponds to almost ${Math.floor(
              deforested
            )} and a half fields`
        : `The deforested area corresponds to almost ${Math.ceil(
            deforested
          )} football fields`;
    return message;
  }
}
const TestMarcioMellosChallenge = new MarcioMellosChallenge(
  readlineSync.question("inform the deforested area in km² \n")
);
console.log(TestMarcioMellosChallenge.fields());
