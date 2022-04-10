(()=>{"use strict";const a={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function e(a){for(var e=a.toLowerCase().split(" "),n=0;n<e.length;n++)e[n]=e[n].charAt(0).toUpperCase()+e[n].substring(1);return e.join(" ")}function n(a){let e=parseInt(a)-273.15;return Math.round(e)}function i(a){let e=1.8*(parseInt(a)-273)+32;return Math.round(e)}const r={clearSky:["clear sky","url('img/backgrounds/clear-sky.jpg')","./img/icons/clear-sky.png"],fewClouds:["few clouds","url('img/backgrounds/few-clouds.jpg')","./img/icons/few-clouds.png"],scatteredClouds:["scattered clouds","url('img/backgrounds/scattered-clouds.jpg')","./img/icons/scattered-clouds.png"],brokenClouds:["broken clouds","url('img/backgrounds/broken-clouds.jpg')","./img/icons/few-clouds.png"],overcastClouds:["overcast clouds","url('img/backgrounds/overcast-clouds.jpg')","./img/icons/scattered-clouds.png"],showerRain:["shower rain","url('img/backgrounds/shower-rain.jpg')","./img/icons/shower-rain.png"],rain:["rain","url('img/backgrounds/rain.jpg')","./img/icons/rain.png"],thunderstorm:["thunderstorm","url('img/backgrounds/thunderstorm.jpg')","./img/icons/thunderstorm.png"],snow:["snow","url('img/backgrounds/snow.jpg')","./img/icons/snow.png"],mist:["mist","url('img/backgrounds/mist.jpg')","./img/icons/mist.png"]};let t=document.getElementById("city-search"),s=document.getElementById("country-search");const o=document.getElementById("search-btn");let l,d,u,c,m,g,M,p,h,S=document.getElementById("main-icon"),b=document.getElementById("city-name"),C=document.getElementById("country-name"),T=document.getElementById("temperature"),y=document.getElementById("main-data"),I=document.getElementById("max-temp"),L=document.getElementById("min-temp"),A=document.getElementById("feels-like"),B=document.getElementById("humidity-number"),E=document.getElementById("pressure-number"),G=document.getElementById("visibility-nunmber"),k=document.getElementById("wind-number"),w=document.getElementById("c-btn"),H=document.getElementById("f-btn");async function F(a,t){const s=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${a}&limit=5&appid=935d96d17070e6ae585257db98f8025f`,{mode:"cors"}),o=await s.json(),b=await o.map((a=>[a.country,a.lat,a.lon]));let C;await b.forEach((a=>{a[0]==t&&(C=Array.from(a))}));const w=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${C[1]}&lon=${C[2]}&appid=935d96d17070e6ae585257db98f8025f`,{mode:"cors"}),H=await w.json(),F=await{main:H.weather[0].main,description:H.weather[0].description,temp:H.main.temp,tempMin:H.main.temp_min,tempMax:H.main.temp_max,feelsLike:H.main.feels_like,humidity:H.main.humidity,pressure:H.main.pressure,windDegrees:H.wind.deg,windSpeed:H.wind.speed,visibility:H.visibility};Object.values(r).forEach((a=>{F.description==a[0]&&(document.body.style.background=a[1],S.src=a[2])})),d=n(F.temp),u=n(F.tempMax),c=n(F.tempMin),m=n(F.feelsLike),g=i(F.temp),M=i(F.tempMax),p=i(F.tempMin),h=i(F.feelsLike),"Celsius"==l?(T.innerHTML=`${d} ºC`,I.innerHTML=`Max ${u} ºC`,L.innerHTML=`Min ${c} ºC`,A.innerHTML=`Feels Like <br> ${m} ºC`):"Fahrenheit"==l&&(T.innerHTML=`${g} ºF`,I.innerHTML=`Max ${M} ºF`,L.innerHTML=`Min ${p} ºF`,A.innerHTML=`Feels Like <br> ${h} ºF`),y.innerHTML=e(F.description),B.innerHTML=`${F.humidity}%`,E.innerHTML=`${F.pressure} hPa`,G.innerHTML=`${F.visibility} km`,k.innerHTML=`${F.windDegrees} / ${F.windSpeed} km/hr`}o.addEventListener("click",(()=>{if(""!=t.value||""!=s.value){let n,i=t.value.toUpperCase(),r=s.value.toUpperCase();Object.values(a).forEach((e=>{var i,t;r==e.toUpperCase()&&(i=a,t=e,n=Object.keys(i).find((a=>i[a]===t)))})),F(i,n),b.innerHTML=e(t.value),C.innerHTML=e(s.value)}else alert("You must complete the fields in order to search for a city's weather!")})),w.addEventListener("click",(()=>{"Fahrenheit"==l&&(T.innerHTML=`${d} ºC`,I.innerHTML=`Max ${u} ºC`,L.innerHTML=`Min ${c} ºC`,A.innerHTML=`Feels Like <br> ${m} ºC`),l="Celsius"})),H.addEventListener("click",(()=>{"Celsius"==l&&(T.innerHTML=`${g} ºF`,I.innerHTML=`Max ${M} ºF`,L.innerHTML=`Min ${p} ºF`,A.innerHTML=`Feels Like <br> ${h} ºF`),l="Fahrenheit"})),F("Valentín Alsina","AR"),b.innerHTML="Valentín Alsina",C.innerHTML="Argentina",l="Celsius"})();