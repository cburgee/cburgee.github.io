import WeatherCard from "./WeatherCard"

export default function WeatherCardList(props) {
  const { weatherData } = props
  return (
    <div>
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}
