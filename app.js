//change page index
let changeIndex = () => location.href = "main.html"

//user city and api here
let userValue = () => {
    let userSearch = document.getElementById("userInput");
    let userValue = userSearch.value;
    const weatherImages = document.getElementById("weatherImg");

    
    // setInterval(() => {
    //     let timeDate = document.getElementById("timeDate");
    //     timeDate.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')
    // }, 1000);



    const apiKey = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b5372d9f93861c3a079f1e75dd399327&q=${userValue}`;

    // console.log("User Input:", userValue);

    if (userValue.trim() === "") {
        Swal.fire("Please enter a city name!");
    } else {
        let weatherData = new Promise((resolve, reject) => {
            fetch(apiKey)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });

        weatherData
            .then((data) => {
                document.getElementById("cityName").innerHTML = data.name.toUpperCase();
                document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

                if (data.weather[0].main === "Clouds") {
                    weatherImages.src = "images/clouds.png"
                } else if (data.weather[0].main === "Clear") {
                    weatherImages.src = "images/clr.gif"
                } else if (data.weather[0].main === "rain") {
                    weatherImages.src = "images/rain.png"
                } else if (data.weather[0].main === "Mist") {
                    weatherImages.src = "images/mist.png"
                } else if (data.weather[0].main === "Drizzle") {
                    weatherImages.src = "images/drizzle.png"
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Not found!",
                    text: "Please enter a valid city name!",
                });
            });

        document.getElementById("userInput").value = "";
    }
};



// Show user current weather with the help of location

var navigator = navigator.geolocation.getCurrentPosition((location) => {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;

    const locationApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=b5372d9f93861c3a079f1e75dd399327`;

    fetch(locationApi)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("cityName").innerHTML = data.name.toUpperCase();
            document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        })
        .catch((err) => console.log(err));
});







