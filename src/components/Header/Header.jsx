import styles from "./Header.module.css"

const Header = ({ title = "Proposals" }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>
      {title}
    </h1>
  </div>
)

export default Header