import got from 'got';

const BASE_URL = 'http://api.weatherapi.com/v1'
const KEY = '67e90330238d440d9be204328232702'

async function getWeather(city) {
    const url = `${BASE_URL}/current.json?key=${KEY}&q=${city}`

    try{
        const data = await got(url).json()
        const {
            location: { name },
            current: { last_updated, temp_c, wind_kph},            
        } = data
        console.log("data: ", name, last_updated, temp_c, wind_kph)
        return {name, last_updated, temp_c, wind_kph}
    } catch(error){
        console.log(error.message)
    }   
}

export { getWeather }