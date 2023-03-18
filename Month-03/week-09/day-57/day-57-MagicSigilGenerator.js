class MagicSigilGenerator {
  constructor(str) {
    this.glyph = str.toUpperCase().match(/([^aeiou/s])/gi);
    this.output = "";
  }

  sigilize() {
    for (let i = this.glyph.length - 1; i >= 0; i--) {
      if (!this.output.includes(this.glyph[i]))
        this.output = this.glyph[i] + this.output;
    }
    return this.output;
  }
}

const magicSigilGenerator = new MagicSigilGenerator(
  "I have a job I enjoy and it pays well"
);
console.log(magicSigilGenerator.sigilize());

// sigilize("i am healthy") ➞ "MLTHY"

// sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"

// sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
