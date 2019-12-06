import React from "react"
import { Link } from "gatsby"
import PropTypes from "react"
import ContactForm from "./ContactForm"
import styles from "../css/header.module.css"
import icon from "../../static/footericon.png"
import chamonix from "../images/chamonix.jpg"
import Image from "gatsby"

const Footer = () => (
  <div className={styles.footer}>
  <div className={styles.footerImage} />
  <header>
    <ContactForm />
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
