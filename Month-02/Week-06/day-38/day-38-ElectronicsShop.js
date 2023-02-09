class ElectronicsShop {
  constructor(keyboards, drivers, budget) {
    this.keyboards = keyboards;
    this.drivers = drivers;
    this.budget = budget;
  }

  getMoneySpent() {
    const prices = [];

    for (let keyprices of this.keyboards) {
      for (let usbprices of this.drivers) {
        if (keyprices + usbprices <= this.budget)
          prices.push(keyprices + usbprices);
      }
    }
    return prices.sort((a, b) => a - b)[0] === undefined
      ? -1
      : prices[prices.length - 1];
  }
}
const electronicsShop = new ElectronicsShop([40, 50, 60], [5, 8, 12], 60); // 58
// const electronicsShop = new ElectronicsShop([40,50,60],[5,8,12],40); // - 1
console.log(electronicsShop.getMoneySpent());
