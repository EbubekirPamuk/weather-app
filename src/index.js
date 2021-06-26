const apiKey = "4efbf8709a05f2f108a414bf11992bb2";
const url = "https://api.openweathermap.org/data/2.5/";

let search = document.querySelector(".search");
search.addEventListener("keypress", (e) => {
  if (e.keyCode == "13") {
    searchResult(search.value);
    search.value = "";
  }
});

const searchResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`;
  fetch(query)
    .then((result) => result.json())
    .then(sonuc);
};

const sonuc = (getResult) => {
  let city = document.querySelector(".city-name");
  city.innerText = `${getResult.name},${getResult.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(getResult.main.temp)}° C`;
  let sky = document.querySelector(".state-sky");
  sky.innerHTML = getResult.weather[0].description;
  let minMax = document.querySelector(".min-max");
  minMax.innerHTML = `${Math.round(getResult.main.temp_min)}° C / ${Math.round(
    getResult.main.temp_max
  )}° C`;
};
