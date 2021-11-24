import { Sidebar, Content, TopBar } from "..";
import styles from "./Main.module.css"

const Main = () => (
  <div className={styles.wrapper}>
    <Sidebar />
    <div className={styles.container}>
      <div className={styles.scroll}>
        <div className={styles.grid}>
          <TopBar />
          <Content />
        </div>
      </div>
    </div>
    <div className={styles.left}></div>
  </div>
)

export default Main;