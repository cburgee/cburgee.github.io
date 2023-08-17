import styles from "./Resume.module.css"
export default function Resume() {
  const resumeURL =
    "https://docs.google.com/document/d/1sEVOKLS1128_-E1f7M_PWXptr43mJDR1dzPPvRDVDek/edit?usp=sharing"
  return (
    <div className={styles.resume}>
      <iframe className={styles.content} src={resumeURL}></iframe>
    </div>
  )
}
