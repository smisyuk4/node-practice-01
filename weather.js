import got from 'got';
import 'dotenv/config';

const BASE_URL = 'http://api.weatherapi.com/v1'

async function getWeather(city) {
    const url = `${BASE_URL}/current.json?key=${process.env.KEY}&q=${city}`

    try{
        const data = await got(url).json()
        const {
            location: { name },
            current: { last_updated, temp_c, wind_kph},            
        } = data

        return {name, last_updated, temp_c, wind_kph}
    } catch(error){
        console.log(error.message)
    }   
}

export { getWeather }