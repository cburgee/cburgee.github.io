import { Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar"
import AboutMePage from "./pages/AboutMePage"
import ResumePage from "./pages/ResumePage"

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
