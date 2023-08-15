import "./App.css"

async function getMeSomeData() {
  const dallasLatitude = 32.78
  const dallasLongitude = -96.81
  const apiEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${dallasLatitude}&lon=${dallasLongitude}&units=imperial&exclude=hourly,alerts,minutely&appid=${process.env.REACT_APP_API_KEY}`
  const response = await fetch(apiEndpoint)
  const data = await response.json()
  console.log(data)
}
getMeSomeData()
function App() {
  return (
    <div className="App">
      {/*
     Header display with title
     an extra large separate card for current temp and weather conditions.
     Outer box with to hold 7-day forecast
     individual cards for each day laid out side-by-side to display week's forecast

     */}
    </div>
  )
}

export default App
