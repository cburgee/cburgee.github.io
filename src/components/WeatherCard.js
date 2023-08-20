import styles from "./WeatherCard.module.css"
export default function WeatherCard(props) {
  const { weatherData } = props
  console.log(weatherData)
  if (weatherData) {
    return (
      <div className={styles.content}>
        <h2>Weather</h2>
        <h3>Dallas, TX</h3>
        <h3>Tmp: ({weatherData.current.temp}) F</h3>
        <h3>Feels Like: ({weatherData.current.feels_like}) F</h3>
      </div>
    )
  }
}
