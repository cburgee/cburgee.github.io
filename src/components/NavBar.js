import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <div id="NavBar">
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/about">About Me</Link>
      <br />
      <Link to="/resume">Resume</Link>
    </div>
  )
}
