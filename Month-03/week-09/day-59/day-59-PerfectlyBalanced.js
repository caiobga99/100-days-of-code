class PerfectlyBalanced {
  constructor(str) {
    this.str = str;
  }

  balanced_bonus() {
    let hash = {};

    for (let i = 0; i < this.str.length; i++) {
      hash[this.str[i]] = hash[this.str[i]] ? (hash[this.str[i]] += 1) : 1;
    }

    let values = new Set(Object.values(hash));

    return values.size <= 1;
  }
}

const perfectlyBalanced = new PerfectlyBalanced("xxxyyyzzz");
console.log(perfectlyBalanced.balanced_bonus());

// balanced_bonus("xxxyyyzzz") => true
// balanced_bonus("abccbaabccba") => true
// balanced_bonus("xxxyyyzzzz") => false
// balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true
// balanced_bonus("pqq") => false
// balanced_bonus("fdedfdeffeddefeeeefddf") => false
// balanced_bonus("www") => true
// balanced_bonus("x") => true
// balanced_bonus("") => true
