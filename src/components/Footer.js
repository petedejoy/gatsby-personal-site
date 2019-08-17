import React from "react"
import { Link } from "gatsby"
import PropTypes from "react"
import styles from "../css/header.module.css"
import icon from "../../static/headericon.png"
import Image from "gatsby"
const Footer = () => (
  <header>
    <div className={styles.header}>
      <div className={styles.list}>
        <Link to="/">
          <img src={icon} className={styles.icon} />
        </Link>
      </div>
    </div>
  </header>
)

export default Footer
