import './App.css'
import WeatherData from './api/weatherapi'

import { useState, useEffect } from 'react'

interface WeatherData {
  temp: number;
  feelsLike: number;
  icon: string;
  name: string;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  useEffect(() => {
    async function getWeather() {
      const data = await WeatherData();
      setWeatherData(data);
    }
    getWeather();
  }, [])

  return (
    <div>
      {weatherData ? (
        <div>
          <h1>Weather App</h1>
          <p>City:{weatherData.name
          }</p>
          <p>Temperature:{weatherData.temp}°C</p>
          <p>Feels like:{weatherData.feelsLike}°C</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
            alt="weather icon"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  )
}


export default App
