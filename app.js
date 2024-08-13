const searchInput = document.querySelector('.search-bar input');
const searchBtn =  document.querySelector('.search-bar button');
const weatherIcon =  document.querySelector('.weather-img');
const temperature =  document.querySelector('.temp');
const cityName =  document.querySelector('.place');
const humidityPercent =  document.querySelector('.humidity-percent');
const windSpeed =  document.querySelector('.wind-speed');

const apiKey ='6dec0a2f109eb36cdbfd7aa8ae23cf83';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather (city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity-percent').innerHTML = Math.round(data.main.humidity)+'%';
    document.querySelector('.wind-speed').innerHTML = data.wind.speed+'km/h';
    document.querySelector('.place').innerHTML = data.name;
    console.log(data);

    if (data.weather[0].main === "clouds") {
        document.querySelector('.weather-img').src = "image/clouds.png";
    }
    else if (data.weather[0].main === "clear") {
        document.querySelector('.weather-img').src = "image/clear.png";
    }
    else if(data.weather[0].main === "rain"){
        document.querySelector('.weather-img').src = "image/rain.png";
    }
    else if(data.weather[0].main === "snow"){
        document.querySelector('.weather-img').src = "image/snow.png";
    }
    else if(data.weather[0].main === "drizzle"){
        document.querySelector('.weather-img').src = "image/drizzle.png";
    }
    else{
        document.querySelector('.weather-img').src = "image/haze.png";
    }
}

searchBtn.addEventListener('click', () =>{
    checkWeather(searchInput.value);
});

