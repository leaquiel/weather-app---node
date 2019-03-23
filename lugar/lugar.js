const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    // encodeURI es para escapar los espacios

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '41a30599b9mshc42bd9139bf62afp191282jsn1e6c8992a99a' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    // const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        // direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}