import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
export default function NavBar() {
  return (
    <div id="NavBar" className={styles.content}>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Me</Link>
      <Link to="/resume">Resume</Link>
    </div>
  )
}
