let now = new Date();
console.log(now);

let currentDate = document.querySelector("#current-date");
let currentTime = document.querySelector("#current-time");

let date = now.getDate();
let hour = now.getHours();

let minutes = now.getMinutes();

if (minutes < 10) {
    minutes = `0${minutes}`;
}

let year = now.getFullYear();
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesay",
  "Thursday",
  "Friday",
  "Saturday",
];
let days = weekDay[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

currentDate.innerHTML = `${days} ${date} ${month}`;
currentTime.innerHTML = `${hour}:${minutes}`;

// homework week 5 - display temp
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureLabel = document.querySelector("#current-temperature");
  let cityElemenet = document.querySelector("#current-city");
  cityElemenet.innerHTML = response.data.city;
  temperatureLabel.innerHTML = `${temperature}°`;
}
// search city
function searchCity(event) {
event.preventDefault();
let textInput = document.querySelector("#text-input");
let city = textInput.value;
//let cityElemenet = document.querySelector("#current-city");
//cityElemenet.innerHTML = `${textInput.value.trim()}`;

let apiKey = "552d5b0d84b3fo63f5d841c0ct5a8338";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
