class TheTimeinWords {
  constructor() {
    this.time = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
      "half",
    ];
  }

  timeInWords(h, m) {
    let hour = "";
    let minute = m === 1 ? " minute" : " minutes";
    if (h == 12 && m == 0b00) {
      hour += "noon";
      return hour;
    }
    if (this.time[h]) {
      if (m == 0b00) hour += this.time[h] + " o'clock";
      if (m > 0 && m <= 20) {
        if (m == 15) {
          hour += "quarter past " + this.time[h];
          return hour;
        }
        hour += this.time[m] + minute + " past " + this.time[h];
      }
      let vh = h == 11 ? "noon" : this.time[h + 1];

      if (m > 20 && m < 30)
        hour += `${this.time[20]} ${this.time[m - 20]} ${minute} past ${vh}`;
      if (m == 30) hour += "half past " + this.time[h];

      if (m > 30 && m <= 40)
        hour += `${this.time[20]} ${this.time[40 - m]}${minute} to ` + vh;

      if (m > 40 && m < 60) {
        if (m == 45) {
          hour += "quarter to " + vh;
          return hour;
        }
        hour += this.time[60 - m] + minute + " to " + vh;
      }
    }

    return hour;
  }
}

const TestTheTimeinWords = new TheTimeinWords();
console.log(TestTheTimeinWords.timeInWords(7, 15));

// timeInWords(5, 47) ➞ thirteen minutes to six
// timeInWords(3, 00) ➞ three o' clock
// timeInWords(7, 15) ➞ quarter past seven
// timeInWords(5, 30) ➞ half past five
// timeInWords(5, 01) ➞ one minute past five
