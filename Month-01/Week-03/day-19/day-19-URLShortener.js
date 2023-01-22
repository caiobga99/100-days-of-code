class URLShortener {
  constructor(url, customLink) {
    this.url = url;
    this.customLink = customLink;
  }
  shorten() {
    const crypto = require("crypto");
    const hash = crypto
      .createHash("sha1")
      .update(this.url)
      .digest("base64")
      .substring(0, 8);
    return `${this.customLink}/${hash}`;
  }
}
const TestURLShortener = new URLShortener("https://youtube.com", "link.me");
console.log(TestURLShortener.shorten());
