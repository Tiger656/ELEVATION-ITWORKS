
const MOCK_WEATHER_ANSWER = {
    "Headline": {
      "EffectiveDate": "2024-04-16T07:00:00+03:00",
      "EffectiveEpochDate": 1713240000,
      "Severity": 5,
      "Text": "Expect showers Tuesday morning",
      "Category": "rain",
      "EndDate": "2024-04-16T13:00:00+03:00",
      "EndEpochDate": 1713261600,
      "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2024-04-15T07:00:00+03:00",
        "EpochDate": 1713153600,
        "Temperature": {
          "Minimum": {
            "Value": 0.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 12.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2024-04-16T07:00:00+03:00",
        "EpochDate": 1713240000,
        "Temperature": {
          "Minimum": {
            "Value": 1.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 11.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2024-04-17T07:00:00+03:00",
        "EpochDate": 1713326400,
        "Temperature": {
          "Minimum": {
            "Value": 1.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 11.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 8,
          "IconPhrase": "Dreary",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2024-04-18T07:00:00+03:00",
        "EpochDate": 1713412800,
        "Temperature": {
          "Minimum": {
            "Value": 2.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 10.3,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 7,
          "IconPhrase": "Cloudy",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2024-04-19T07:00:00+03:00",
        "EpochDate": 1713499200,
        "Temperature": {
          "Minimum": {
            "Value": -1.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 7.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/by/minsk/28580/daily-weather-forecast/28580?day=5&unit=c&lang=en-us"
      }
    ]
  }


const API_KEY = "0dvim0GqZXgEF8Mf9W2abyT0kaAlUfAt"


async function getPlaceKey(cityName) {
    // const API = "http://dataservice.accuweather.com/locations/v1/cities/search?" + "q=Minsk&" + "apikey=0dvim0GqZXgEF8Mf9W2abyT0kaAlUfAt"
    // const response = await fetch(API);
    // if (!response.ok) {
    //     throw new Error('Failed to fetch place key');
    // }
    // return (await response.json())[0].Key;
    return 0;
}

async function getWeatherForFiveDaysByLocationKey(key) {
    // console.log(key);
    // const API = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+ key + "?apikey=" + API_KEY;
    // const response = await fetch(API);
    // if (!response.ok) {
    //     console.log(response)
    //     throw new Error('Failed to fetch weather data');
    // }
    // console.log(await response.json())
    // return await response.json();
    return MOCK_WEATHER_ANSWER;
}


//const a = getPlaceCoordinates("Minsk").then(e => console.log(e));
//console.log(a)



// // Constants
// const apiKey = 'YOUR_API_KEY'; // Replace with your API key
// const defaultCity = 'Tel Aviv';

// // DOM Elements
// const mainScreen = document.getElementById('main-screen');
// const favoritesScreen = document.getElementById('favorites-screen');
// const searchInput = document.getElementById('search-input');
// const currentWeatherDiv = document.getElementById('current-weather');
// const forecastDiv = document.getElementById('forecast');
// const favoritesList = document.getElementById('favorites-list');
// const mainScreenBtn = document.getElementById('main-screen-btn');
// const favoritesScreenBtn = document.getElementById('favorites-screen-btn');

// // Event Listeners
// searchInput.addEventListener('change', searchWeather);
// mainScreenBtn.addEventListener('click', () => showScreen(mainScreen));
// favoritesScreenBtn.addEventListener('click', () => showScreen(favoritesScreen));

// // Functions
// async function searchWeather() {
//     const cityName = searchInput.value.trim();
//     if (cityName === '') return;

//     try {
//         const weatherData = await fetchWeatherData(cityName);
//         updateWeatherUI(weatherData);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         // Display error message
//     }
// }

// async function fetchWeatherData(cityName) {
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//         throw new Error('Failed to fetch weather data');
//     }
//     return await response.json();
// }

// async function aa() {
//     const ipInfoUrl = "http://ip-api.com/json/"

//     return await fetch(ipInfoUrl)
//         .then(response => response.json())
//         .then(data => {
//             var city = data.regionName;
        
//             return fetch("https://api.open-meteo.com/v1/forecast?" + new URLSearchParams({
//                 latitude: data.lat,
//                 longitude: data.lon,
//                 current_weather: true,
//                 hourly: "temperature_2m,relativehumidity_2m,windspeed_10m"
//             }))
//             .then(response => response.json())
//             // .then(dataWeather => {   
//             //     document.querySelector('#weather').textContent = `Current temperature in ${data.regionName}: ${dataWeather.current_weather.temperature} °C`;
//             // })
//             // .catch(error => {
//             //     document.querySelector('#weather').textContent = `Ошибка при получении данных о погоде: ${error}`;
//             //     console.error('Error while getting data about weather:', error);
//             // });

//         })
// }

// function updateWeatherUI(weatherData) {
//     // Update current weather display
//     currentWeatherDiv.innerHTML = `
//         <h2>${weatherData.name}</h2>
//         <p>Temperature: ${weatherData.main.temp}°C</p>
//         <p>Description: ${weatherData.weather[0].description}</p>
//     `;
//     // Fetch and update 5-day forecast
//     // Display location's weather in favorites list
// }

// function showScreen(screen) {
//     mainScreen.style.display = 'none';
//     favoritesScreen.style.display = 'none';
//     screen.style.display = 'block';
// }

// Initial Setup
window.onload = async function() {
    searchInput.value = defaultCity;
    const result = await getWeatherForFiveDaysByLocationKey();
    currentWeatherDiv.innerHTML = `
         <h2>${weatherData.name}</h2>
         <p>Temperature: ${weatherData.main.temp}°C</p>
         <p>Description: ${weatherData.weather[0].description}</p>
    `;
};