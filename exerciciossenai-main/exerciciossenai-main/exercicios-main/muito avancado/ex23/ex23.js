// Yasmin Siqueira Lobo
const apiKey = 'a1fab7c080e1e5cc8fe68e32caff2aac';


function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherResult = document.getElementById('weatherResult');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const cityName = data.name;
        
        weatherResult.innerHTML = `<p>Previsão do tempo para ${cityName}: ${description}. Temperatura atual: ${temperature}°C</p>`;
    })
    .catch(error => {
        console.error('Erro ao obter dados meteorológicos:', error);
        const weatherResult = document.getElementById('weatherResult');
        weatherResult.innerHTML = '<p>Erro ao obter dados meteorológicos. Por favor, tente novamente mais tarde.</p>';
    });
}

