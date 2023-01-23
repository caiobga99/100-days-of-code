const apiKey = "66e97ebe08fb974555e8057851b0bd0d";
const buttonSearch = document.querySelector("[data-button-search]");
const res = document.querySelector("[data-result]");

buttonSearch.addEventListener("click", async () => {
  let city = document.querySelector("[data-city]").value;
  res.innerHTML = "Loading";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
  )
    .then((Response) => Response.json())
    .then((data) => {
      if (
        data.sys.country === "BR" ||
        data.sys.country === "US" ||
        data.sys.country === "CA"
      ) {
        res.innerHTML = `${data.name}-${data.sys.country}<br>Latitude: ${
          data.coord.lat
        }<br>Longitude: ${data.coord.lon}<br><br>Time: ${
          parseFloat(data.main.temp) + "ºC"
        } or ${(parseFloat(data.main.temp) * 9) / 5 + 32 + "ºF"}<br>${
          data.weather[0].description
        }`;
      } else {
        res.innerHTML = "this city does not belong to the valid countries!";
      }
    })
    .catch((err) => {
      res.innerHTML = "this city does not exist!";
      console.log(err);
    });
});
