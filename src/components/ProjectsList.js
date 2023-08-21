import styles from "./ProjectsList.module.css"
import pongImg from "../assets/pong_img.png"
import pomodoroImg from "../assets/pomodoro_png.png"
import snakeImg from "../assets/snake_png.png"
export default function ProjectsList() {
  return (
    <div className={styles.content}>
      <div>
        <div>
          <div>
            <img src={pongImg}></img>
          </div>
          <p>
            I recreated the revolutionary game, Pong, using the turtle library
            from Python.
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <div>
            <img src={pomodoroImg}></img>
          </div>
          <p>
            A pomodoro timer/clock to help keep track of break times and work
            times, utilizing the pomodoro study-time guideline.
          </p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <div>
            <img src={snakeImg}></img>
          </div>
          <p>A recreation of the popular game snake.</p>
        </div>
      </div>
    </div>
  )
}
