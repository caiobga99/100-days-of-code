class TrafficLightChecker {
  trafficLights(seq) {
    let arr = seq.split(/[^A-Z]+/);

    if (arr.length < 4 || arr.length >= 10) return "ERROR!";
    if (arr[0] !== "R" || arr[arr.length - 1] !== "R") return "REJECT!";

    for (let index in arr) {
      if (arr[index] === "R") {
        if (Number(index) + 1 === arr.length) return "ACCEPT!";
        if (arr[Number(index) + 1] === "G" || arr[Number(index) + 1] === "C") {
          continue;
        } else return "REJECT!";
      }
      if (arr[index] === "G") {
        if (arr[Number(index) + 1] === "Y" || arr[Number(index) + 1] === "C") {
          continue;
        } else return "REJECT!";
      }
      if (arr[index] === "Y") {
        if (arr[Number(index) + 1] === "R") {
          continue;
        } else return "REJECT!";
      }
      if (arr[index] === "C") {
        if (arr[Number(index) + 1] === "R") {
          continue;
        } else return "REJECT!";
      }
    }
  }
}

const TestTrafficLightChecker = new TrafficLightChecker();
console.log(
  TestTrafficLightChecker.trafficLights("R G Y R C R P R G Y R G Y R G Y R")
);

// 1 - Input: R G Y R C R G Y R                  Output: ACCEPT
// 2 - Input: G Y R G Y R                        Output: REJECT
// 3 - Input: R Y G P                            Output: REJECT
// 4 - Input: R G Y                              Output: ERROR
// 5 - Input: X 8 S                              Output: ERROR
// 6 - Input: R G Y R C R P R G Y R G Y R G Y R  Output: ERROR
