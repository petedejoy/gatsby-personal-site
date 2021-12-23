import React from "react"
import { Link } from "gatsby"
import styles from "../css/header.module.css"
import icon from "../../static/headericon.png"

const Footer = () => (
  <div className={styles.footer}>
  <header>
    <div className={styles.center}>
      <div className={styles.list}>
        <Link to="/">
          <img src={icon} className={styles.icon} />
        </Link>
      </div>
    </div>
  </header>
  </div>
)

export default Footer
