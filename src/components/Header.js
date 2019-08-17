import React from "react"
import { Link } from "gatsby"
import PropTypes from "react"
import styles from "../css/header.module.css"
import icon from "../../static/headericon.png"
import Image from "gatsby"

const Header = ({ menuLinks }) => (
  <header>
    <div className={styles.header}>
      <div className={styles.list}>
        <Link to="/">
          <img src={icon} className={styles.icon} />
        </Link>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link className={styles.items} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  menuLinks: PropTypes.function,
}

export default Header
