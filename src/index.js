async function fetchWeather(city, country) {
    const cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=935d96d17070e6ae585257db98f8025f`, {mode: 'cors'});
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
    const localWeatherData = {
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
    return localWeatherData;
}

fetchWeather("Lanus", "AR");
