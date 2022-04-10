//VARIABLES

let cityInput = document.getElementById('city-search');
let countryInput = document.getElementById('country-search');
const searchBtn = document.getElementById('search-btn');
let mainIcon = document.getElementById('main-icon');
let cityName = document.getElementById('city-name');
let countryName = document.getElementById('country-name');
let temperature = document.getElementById('temperature');
let mainData = document.getElementById('main-data');

//COUNTRY CODE OBJECT + FUNCTION
const countryCodes = {
    AF: 'Afghanistan',
    AX: 'Aland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua And Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia And Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CD: 'Congo, Democratic Republic',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: 'Cote D\'Ivoire',
    HR: 'Croatia',
    CU: 'Cuba',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island & Mcdonald Islands',
    VA: 'Holy See (Vatican City State)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran, Islamic Republic Of',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle Of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KR: 'Korea',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: 'Lao People\'s Democratic Republic',
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libyan Arab Jamahiriya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MK: 'Macedonia',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia, Federated States Of',
    MD: 'Moldova',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territory, Occupied',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russian Federation',
    RW: 'Rwanda',
    BL: 'Saint Barthelemy',
    SH: 'Saint Helena',
    KN: 'Saint Kitts And Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin',
    PM: 'Saint Pierre And Miquelon',
    VC: 'Saint Vincent And Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome And Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia And Sandwich Isl.',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Suriname',
    SJ: 'Svalbard And Jan Mayen',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad And Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks And Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    UM: 'United States Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Viet Nam',
    VG: 'Virgin Islands, British',
    VI: 'Virgin Islands, U.S.',
    WF: 'Wallis And Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe'
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

// WEATHER PICTURES OBJECT

const weatherTypes = {
    clearSky: ['clear sky', `url('img/backgrounds/clear-sky.jpg')`, "./img/icons/clear-sky.png"],
    fewClouds: ['few clouds', `url('img/backgrounds/few-clouds.jpg')`, "./img/icons/few-clouds.png"],
    scatteredClouds: ['scattered clouds', `url('img/backgrounds/scattered-clouds.jpg')`, "./img/icons/scattered-clouds.png"],
    brokenClouds: ['broken clouds', `url('img/backgrounds/broken-clouds.jpg')`, "./img/icons/few-clouds.png"],
    overcastClouds: ['overcast clouds', `url('img/backgrounds/overcast-clouds.jpg')`, "./img/icons/scattered-clouds.png"],
    showerRain: ['shower rain', `url('img/backgrounds/shower-rain.jpg')`, "./img/icons/shower-rain.png"],
    rain: ['rain', `url('img/backgrounds/rain.jpg')`, "./img/icons/rain.png"],
    thunderstorm: ['thunderstorm', `url('img/backgrounds/thunderstorm.jpg')`, "./img/icons/thunderstorm.png"],
    snow: ['snow', `url('img/backgrounds/snow.jpg')`, "./img/icons/snow.png"],
    mist: ['mist', `url('img/backgrounds/mist.jpg')`, "./img/icons/mist.png"]
}

// TEMPERATURE CONVERSORS

function kelvinToCelsius(k) {
    let c = parseInt(k) - 273.15;
    return Math.round(c);
}

function fahrenheitToCelsius(f) {
    let c = (parseInt(f) - 32) * 0.5556;
    return Math.round(c);
}

function celsiusToFahrenheit(c) {
    let f = ((parseInt(c)) * 1.8) + 32;
    return Math.round(f);
}

//API FETCH + OBJECT RETURN

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

    temperature.innerHTML = `${kelvinToCelsius(localWeatherData.temp)}º C`;
    mainData.innerHTML = localWeatherData.description;
}

// EVENT LISTENERS

searchBtn.addEventListener('click', () => {

    let myCity = cityInput.value.toUpperCase();
    let myCountry = countryInput.value.toUpperCase();
    let countryCode;

    Object.values(countryCodes).forEach(c => {
        if (myCountry == c.toUpperCase()) {
            countryCode = getKeyByValue(countryCodes, c);
            console.log(countryCode);
        }
    })
    fetchWeather(myCity, countryCode);
    cityName.innerHTML = cityInput.value;
    countryName.innerHTML = countryInput.value;
})