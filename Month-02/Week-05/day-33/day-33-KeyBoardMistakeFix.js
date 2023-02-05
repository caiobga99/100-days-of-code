class KeyBoardMistakeFix {
  constructor(text) {
    this.text = text;
    this.keyboard = "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./";
  }

  keyBoardMistake() {
    return this.text
      .split("")
      .map((char) =>
        char === " " ? char : this.keyboard[this.keyboard.indexOf(char) - 1]
      )
      .join("");
  }
}

const keyBoardMistakeFix = new KeyBoardMistakeFix("O S, GOMR YPFSU/");
console.log(keyBoardMistakeFix.keyBoardMistake());
