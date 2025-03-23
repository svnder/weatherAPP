import axios from 'axios';


//const apiKey = process.env.apiKey;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = async (city: string) => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                q: city,
                appid: process.env.apiKey,
                units: 'metric'
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export default fetchWeather;