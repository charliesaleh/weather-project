const container = document.querySelector('.container');
const search = document.querySelector('.search button');
const weatherContainer = document.querySelector('.weatherContainer');
const weatherDescription = document.querySelector('.weatherDescription');

search.addEventListener('click', () => {

    const city = document.querySelector('.search input').value;
    const APIKey = '52804cb8088934d19e898a0107b5a343'

    if(city === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const humidity = document.querySelector('.weatherDescription .humidity span');
            const temperature = document.querySelector('.weatherContainer .temperature');
            const wind = document.querySelector('.weatherDescription .wind span');
            const description = document.querySelector('.weatherContainer .description');
            const image = document.querySelector('.weatherContainer img');

                switch(data.weather[0].main){
                    case 'Clear':
                        image.src = 'https://img.icons8.com/color/96/000000/sun--v1.png';
                        break;
                    case 'Clouds':
                        image.src = 'https://img.icons8.com/color/96/000000/cloud.png';
                        break;
                    case 'Rain':
                        image.src = 'https://img.icons8.com/color/96/000000/rain.png';
                        break;
                    case 'Snow':
                        image.src = 'https://img.icons8.com/color/96/000000/snow.png';
                        break;
                    case 'Haze':
                        image.src = 'https://img.icons8.com/color/96/000000/thunderstorm.png';
                        break;
                    default:
                        image.src = 'https://img.icons8.com/color/96/000000/sun--v1.png';
                }
                humidity.innerHTML = `${data.main.humidity}%`;
                description.innerHTML = `${data.weather[0].description}`;
                temperature.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
                wind.innerHTML = `${parseInt(data.wind.speed)}km/h`;
            }
        )})