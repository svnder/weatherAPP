import axios from 'axios';
import apiKey from '../api/apikey';



const fetchWeather = async (): Promise<{
    temp: number,
    feelsLike: number,
    icon: string,
    name: string
} | null> => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=${apiKey}&units=metric`
        );
        return {
            name: response.data.name,
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            icon: response.data.weather[0].icon
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default fetchWeather;