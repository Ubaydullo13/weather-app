const apiKey = `a645793217c99e5c5216b69e459b888c`;
async function getData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    
    updateWeatherUI(data);
}

const cityEl = document.querySelector('.city');
const countryEl = document.querySelector('.country');
const tempEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description-text');
const dateEl = document.querySelector('.date');
const descriptionIcon = document.querySelector('.description i');
function updateWeatherUI(data){

    cityEl.textContent = data.name;
    countryEl.textContent = data.sys.country;
    tempEl.textContent = `${Math.round(data.main.temp)}°`;
    descriptionEl.textContent = data.weather[0].description;
    
    const currentDate = new Date();
    dateEl.textContent = currentDate.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;
}

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.city-input');



formEl.addEventListener('submit', (e) => {
    e.preventDefault();

  const city = inputEl.value;
  if(city !== ''){
    getData(city);
    inputEl.value = '';
  }
});

function getWeatherIconName(weatherCondition) {


    const iconMap = {
        Clear: "wb_sunny",
        Clouds: "wb_cloudy",
        Rain: "umbrella",
        Thunderstorm: "flash_on",
        Snow: "ac_unit",
        Drizzle: "grain",
        Mist: "cloud",
        Smoke: "cloud",
        Haze: "cloud",
        Fog: "cloud",
    }
    return iconMap[weatherCondition] || icon;
}


