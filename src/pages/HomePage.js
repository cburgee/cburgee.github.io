import Title from "../components/Title"
import WeatherCardList from "../components/WeatherCardLIst"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [weatherData, setWeatherData] = useState(null)
  async function getMeSomeData() {
    const dallasLatitude = 32.78
    const dallasLongitude = -96.81
    const apiEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${dallasLatitude}&lon=${dallasLongitude}&units=imperial&exclude=hourly,alerts,minutely&appid=${process.env.REACT_APP_API_KEY}`
    const response = await fetch(apiEndpoint)
    const data = await response.json()
    setWeatherData(data)
  }
  useEffect(function () {
    getMeSomeData()
  }, [])

  return (
    <main>
      <Title />
      <WeatherCardList weatherData={weatherData} />
    </main>
  )
}
