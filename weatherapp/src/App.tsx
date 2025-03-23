import './App.css'
import Home from '../components/Home'
import WeatherData from './api/weatherapi'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<WeatherData />} />
      </Routes>
    </Router>
    
  )
}

export default App
