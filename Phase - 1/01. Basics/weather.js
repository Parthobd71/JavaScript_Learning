//weather in json
let weather = "sunny";
if (weather === "rainy") {
    console.log("Take an umbrella");
} else if (weather === "cloudy") {
    console.log("It might rain, take a jacket");
} else if (weather === "sunny") {
    console.log("Wear sunglasses");
} else {
    console.log("Check the weather forecast");
}
//temperature check
let temperature = 30;
if (temperature > 30) {
    console.log("It's hot outside, stay hydrated");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("The weather is pleasant");
} else {
    console.log("It's cold outside, wear warm clothes");
}
//windy condition
let windSpeed = 15;
if (windSpeed > 20) {
    console.log("It's very windy, be cautious");
} else if (windSpeed >= 10 && windSpeed <= 20) {
    console.log("It's a bit windy");
} else {
    console.log("Calm weather");
}
//get weather
function getWeather() {
    return {
        weather: "sunny",
        temperature: 28,
        windSpeed: 12
    };
}
let currentWeather = getWeather();
console.log("Current Weather:", currentWeather.weather);
console.log("Temperature:", currentWeather.temperature + "°C");
console.log("Wind Speed:", currentWeather.windSpeed + " km/h");
/* we explored
1. if-else
2. nested if-else
3. switch-case
4. Comparison in if-else
5. logical operators in if-else
6. ternary operator
*/