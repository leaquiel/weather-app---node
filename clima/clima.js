const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e170516ee922101a6c7408d81386513a&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}