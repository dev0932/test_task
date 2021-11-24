import styles from "./Sidebar.module.css"

const links = [{ name: "Posts", active: false }, { name: "Who is interested", active: false }, { name: "Proposals", active: true }, { name: "Contacts", active: false }]

const Sidebar = () => (
  <div className={styles.wrapper}>
    {links.map(link => (
      <div
        className={`${styles.link} ${link.active ? styles.active : ""}`}
        key={link.name}
      >
        {link.name}
      </div>
    )
    )}
  </div>
)

export default Sidebar