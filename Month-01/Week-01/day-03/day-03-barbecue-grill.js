const skewers1 = [
  "--xo--x--ox--",
  "--xx--x--xx--",
  "--oo--o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--",
]; //[1, 4]

const skewers2 = [
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--",
]; //[2, 3]

const skewers3 = [
  "--oooo-ooo--",
  "--xxxxxxxx--",
  "--o---",
  "-o-----o---x--",
  "--o---o-----",
]; //[3, 2]

class FindAndcountSkewersForType {
  constructor(skewers) {
    this.listFlavors = skewers;
  }

  findTypesFlavors() {
    let totalVegetarianSkewers = 0;
    let totalNonVegetarianSkewers = 0;
    this.listFlavors.forEach((split) => {
      split.includes("x")
        ? totalNonVegetarianSkewers++
        : totalVegetarianSkewers++;
    });
    return `[${totalVegetarianSkewers}, ${totalNonVegetarianSkewers}] --- ${totalVegetarianSkewers} vegetarian skewers, ${totalNonVegetarianSkewers} non-vegetarian skewers `;
  }
}

const SkewersConter = new FindAndcountSkewersForType(skewers1);
console.log(SkewersConter.findTypesFlavors());
