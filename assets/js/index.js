const apikey = process.env.KEY;
const searchBut = document.querySelector("");
const searchInput = document.querySelector("#searchInput");
const weatherHead = document.querySelector("");
const weatherMain = document.querySelector("");


// Render
function render(weatherData){
   
    
}

// search result
function getSearch(city){
    const req = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURI(city) + '&units=imperial&appid='+ (apikey);
    getWeather(req,city);
}

// lat and long for city 
function getWeather(req,city){
    fetch(req) .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let cityElement = searchInput;
        cityElement.value = "";
        cityElement.setAttribute(city);
        getCall(data.coord.lat, data.coord.lon, city);
    })
    .catch(err => {alert("something went wrong, try again")});
};

