function kelvinToCelsius(k) {
    let c = parseInt(k) - 273.15;
    return Math.round(c);
}

function kelvinToFahrenheit(k) {
    let f = (1.8 * (parseInt(k) - 273)) + 32;
    return Math.round(f);
}

export { kelvinToCelsius , kelvinToFahrenheit };