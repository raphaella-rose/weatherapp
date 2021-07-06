function formatDate(date) {
let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

let currentDate = `${day} ${hour}:${minutes}`
return currentDate;
}
let date = new Date();
let showDate = document.querySelector(".date");
showDate.innerHTML = (formatDate(date))

function displayCurrentTemperature(response) {
  document.querySelector("#display-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = `Humidity - ${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `Wind - ${Math.round(response.data.wind.speed)}km/h`;
  document.querySelector("#max-temp").innerHTML = `${Math.round(response.data.main.temp_max)}°`;
  document.querySelector("#min-temp").innerHTML = `${Math.round(response.data.main.temp_min)}°`;
}

function searchCity(city) {
  let apiKey = "e99a6b83a02b9bd00c5d8a973f6c63e0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#location-input").value;
  searchCity(city);
  } 


let search = document.querySelector("#search");
search.addEventListener("submit", handleSubmit);
searchCity("London")