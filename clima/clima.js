const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=8a1b33eb35c021e095c4ef0f5e68d484`)

    if (resp.data.lenght === 0) {
        throw new Error(`No hay resultados para la ubicación enviada`);
    }

    const temp = resp.data.main.temp;
    const weather = resp.data.weather[0].description;

    return {
        temp,
        weather
    }
}

module.exports = {
    getClima
}