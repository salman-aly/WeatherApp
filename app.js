let userValue = () => {
    const apiKey = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b5372d9f93861c3a079f1e75dd399327
    &q`
    let userSearch = document.getElementById("userInput");
    let userValue = userSearch.value
    console.log("User Input:", userValue);

    if (userValue.trim() === "") {
        Swal.fire("Please enter a city name!");
    } else {
        let weatherData = new Promise((resolve, reject) => {
            fetch(apiKey)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err))
        })
    }

}

