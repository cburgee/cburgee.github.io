import { useEffect } from "react"
export default function WeatherCard(props) {
  const { weatherData } = props
  if (weatherData) {
    return (
      <div>
        <h1>{weatherData.current.temp}</h1>
      </div>
    )
  }
}
