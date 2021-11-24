import styles from "./TopBar.module.css"

const Button = ({ children, paddingLess }) => (
  <div className={styles.btnContainer}>
    <button className={`${styles.btn} ${paddingLess ? styles.firstBtn : ""}`}>{children}</button>
  </div>
)

const TopBar = () => (
  <>
    <Button paddingLess>Search Reference</Button>
    <Button>Search client name</Button>
    <div></div>
    <Button>Sort by</Button>
    <Button>Filter by status</Button>
  </>
)

export default TopBar