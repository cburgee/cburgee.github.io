import { Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar"
import AboutMePage from "./pages/AboutMePage"
import ResumePage from "./pages/ResumePage"

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
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
