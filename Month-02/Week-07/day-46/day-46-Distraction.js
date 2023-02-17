class Distraction {
  constructor(str) {
    this.str = str;
    this.forbiddenWords = ["memes", "vines", "roasts", "Danny Devito"];
  }
  preventDistraction() {
    for (let word of this.forbiddenWords) {
      if (this.str.toLowerCase().includes(word.toLowerCase()))
        return "NO!";
    }
    return "Safe watching!";
  }
}

const distraction = new Distraction("How to ace BC Calculus in 5 Easy Steps");
console.log(distraction.preventDistraction());
// preventDistractions("vines that butter my eggroll") ➞ "NO!"
// preventDistractions("Hot pictures of Danny DeVito") ➞ "NO!"
// preventDistractions("How to ace BC Calculus in 5 Easy Steps") ➞ "Safe watching!"