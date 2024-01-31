var APIKey = "e109bc28a5fa1c748caff3c59f2864a9";
// This is the api key that will allow and execute all the methods needed for the five day forecast.
function weatherSearch() {
    document.querySelector("#forecastcon").innerHTML = ""
    var search = document.getElementById("searchbar").value 
    var weatherapi = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=" + APIKey + "&units=imperial"
    fetch (api).then(function (res) {

        return res.json()

    }).then (function (data) {

        var day = data.list[0]

        document.getElementById("cityname").innerText = data.city.name

        document.getElementById("ctemp").innerText = day.main.temp

        document.getElementById("chumid").innerText = day.main.humidity

        document.getElementById("cwind").innerText = day.wind.speed

        document.getElementById("weather-icon-current").src = "https://openweathermap.org/img/wn/"+day.weather[0].icon+".png"

        
            
        }
    )}
// I dont know what I am doing... Please dont mark this as skipped I just want to eat this as a bad grade and then stay on my project and not fall behind again