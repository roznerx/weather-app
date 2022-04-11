import { countryCodes , getKeyByValue } from './modules/countries';
import { capitalize } from './modules/capitalizer';
import { kelvinToCelsius , kelvinToFahrenheit } from './modules/tempConversors';
import { weatherTypes } from './modules/weatherTypes';

//DOM ELEMENTS

let cityInput = document.getElementById('city-search');
let countryInput = document.getElementById('country-search');
const searchBtn = document.getElementById('search-btn');
let mainIcon = document.getElementById('main-icon');
let cityName = document.getElementById('city-name');
let countryName = document.getElementById('country-name');
let temperature = document.getElementById('temperature');
let mainData = document.getElementById('main-data');
let maxTemp = document.getElementById('max-temp');
let minTemp = document.getElementById('min-temp');
let tempFeelsLike = document.getElementById('feels-like');
let humidityNumber = document.getElementById('humidity-number');
let pressureNumber = document.getElementById('pressure-number');
let visibilityNumber = document.getElementById('visibility-nunmber');
let windNumber = document.getElementById('wind-number');
let cBtn = document.getElementById('c-btn');
let fBtn = document.getElementById('f-btn');
let loader = document.getElementById('loading');

// VARIABLES

let tempUnit;
let cTemp;
let cMaxTemp;
let cMinTemp;
let cFeelsLike;
let fTemp;
let fMaxTemp;
let fMinTemp;
let fFeelsLike;

// API FECTH

async function fetchWeather(city, country) {
    try {
        loader.style.display = 'block';
        const cityResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=935d96d17070e6ae585257db98f8025f`, {mode: 'cors'});
        const cityData = await cityResponse.json();
        const cityArrs = await cityData.map(cd => [cd.country, cd.lat, cd.lon]);
        let dataArr;
        const cityArr = await cityArrs.forEach(c => {
            if (c[0] == country) {
                dataArr = Array.from(c);
            }
        })
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataArr[1]}&lon=${dataArr[2]}&appid=935d96d17070e6ae585257db98f8025f`, {mode: 'cors'});
        const weatherData = await weatherResponse.json();
        const localWeatherData = await {
            main: weatherData.weather[0].main,
            description: weatherData.weather[0].description,
            temp: weatherData.main.temp,
            tempMin: weatherData.main.temp_min,
            tempMax: weatherData.main.temp_max,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            windDegrees: weatherData.wind.deg,
            windSpeed: weatherData.wind.speed,
            visibility: weatherData.visibility
        }
        Object.values(weatherTypes).forEach(wt => {
            if (localWeatherData.description == wt[0]) {
                document.body.style.background = wt[1];
                mainIcon.src = wt[2];
            }
        });
        cTemp = kelvinToCelsius(localWeatherData.temp);
        cMaxTemp = kelvinToCelsius(localWeatherData.tempMax);
        cMinTemp = kelvinToCelsius(localWeatherData.tempMin);
        cFeelsLike = kelvinToCelsius(localWeatherData.feelsLike);
        fTemp = kelvinToFahrenheit(localWeatherData.temp);
        fMaxTemp = kelvinToFahrenheit(localWeatherData.tempMax);
        fMinTemp = kelvinToFahrenheit(localWeatherData.tempMin);
        fFeelsLike = kelvinToFahrenheit(localWeatherData.feelsLike);
        if (tempUnit == 'Celsius') {
            temperature.innerHTML = `${cTemp} ºC`;
            maxTemp.innerHTML = `Max ${cMaxTemp} ºC`;
            minTemp.innerHTML = `Min ${cMinTemp} ºC`;
            tempFeelsLike.innerHTML = `Feels Like <br> ${cFeelsLike} ºC`;
        } else if (tempUnit == 'Fahrenheit') {
            temperature.innerHTML = `${fTemp} ºF`;
            maxTemp.innerHTML = `Max ${fMaxTemp} ºF`;
            minTemp.innerHTML = `Min ${fMinTemp} ºF`;
            tempFeelsLike.innerHTML = `Feels Like <br> ${fFeelsLike} ºF`;
        }
        mainData.innerHTML = capitalize(localWeatherData.description);
        humidityNumber.innerHTML = `${localWeatherData.humidity}%`;
        pressureNumber.innerHTML = `${localWeatherData.pressure} hPa`;
        visibilityNumber.innerHTML = `${localWeatherData.visibility} km`;
        windNumber.innerHTML = `${localWeatherData.windDegrees} / ${localWeatherData.windSpeed} km/hr`;
        loader.style.display = 'none';
    } catch (error) {
        alert("Please check your grammar! The city or the country spelling might be incorrect. Also remember some countries might require you to write their full name, i.e. Iran, Islamic Republic Of instead of Iran.");
        loader.style.display = 'none';
        defaultSettings();
        cityInput.value = '';
        countryInput.value = '';
    }
}

// EVENT LISTENERS

searchBtn.addEventListener('click', () => {
    if (cityInput.value == '' && countryInput.value == '') {
        alert("You must complete the fields in order to search for a city's weather!");
        return;
    } else {
        let myCity = cityInput.value.toUpperCase().trim();
        let myCountry = countryInput.value.toUpperCase().trim();
        let countryCode;
        Object.values(countryCodes).forEach(c => {
            if (myCountry == c.toUpperCase()) {
                countryCode = getKeyByValue(countryCodes, c);
            }
        })
        fetchWeather(myCity, countryCode);
        cityName.innerHTML = capitalize(cityInput.value);
        countryName.innerHTML = capitalize(countryInput.value);
    }
})

cBtn.addEventListener('click', () => {
    if (tempUnit == 'Fahrenheit') {
        temperature.innerHTML = `${cTemp} ºC`;
        maxTemp.innerHTML = `Max ${cMaxTemp} ºC`;
        minTemp.innerHTML = `Min ${cMinTemp} ºC`;
        tempFeelsLike.innerHTML = `Feels Like <br> ${cFeelsLike} ºC`;
    }
    tempUnit = 'Celsius';

})

fBtn.addEventListener('click', () => {
    if (tempUnit == 'Celsius') {
        temperature.innerHTML = `${fTemp} ºF`;
        maxTemp.innerHTML = `Max ${fMaxTemp} ºF`;
        minTemp.innerHTML = `Min ${fMinTemp} ºF`;
        tempFeelsLike.innerHTML = `Feels Like <br> ${fFeelsLike} ºF`;
    }
    tempUnit = 'Fahrenheit';
})

// DEFAULT

function defaultSettings() {
    fetchWeather('Valentín Alsina', 'AR');
    cityName.innerHTML = 'Valentín Alsina';
    countryName.innerHTML = 'Argentina';
    tempUnit = 'Celsius';
    return;
}

defaultSettings();