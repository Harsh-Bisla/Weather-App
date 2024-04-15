let key = "f0639efbec1df04578221d51a63ce774";
let url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}&units=metric`;
let input = document.querySelector("input")

document.querySelector(".search button").addEventListener("click", () => {
    let val = input.value;
    console.log(val)
    url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${key}&units=metric`;
    getData()
})


async function getData() {
    let promise = await fetch(url)
    let data = await promise.json()
    // console.log(data.weather[0].main)
    document.querySelector(".temprature h1").innerHTML = data.main.temp + '<sup>o</sup>' + "C";
    document.querySelector(".city-name h2").innerHTML = data.name;
    document.querySelector(".humidity h3").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed h3").innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Haze") {
        document.querySelector(".image img").src = "img/mist.png";
    }
    else if (data.weather[0].main == "Clouds") {
        document.querySelector(".image img").src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        document.querySelector(".image img").src = "img/clear.png";
    }
    else if (data.weather[0].main == "Snow") {
        document.querySelector(".image img").src = "img/snow.png";
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".image img").src = "img/rain.png";
    }
}

getData()