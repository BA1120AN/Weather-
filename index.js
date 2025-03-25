const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p class="text-danger">${data.message}</p>`;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
