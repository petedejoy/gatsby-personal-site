import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styles from "../css/header.module.css"
import icon from "../../static/headericon.png"
import Image from "gatsby"
import ResponsiveMenu from "react-responsive-navbar"
import { MdMenu, MdClose } from 'react-icons/md'

const Header = ({ menuLinks }) => (
  <header>
    <div className={styles.header}>
      <div className={styles.list}>
        <Link to="/">
          <img src={icon} className={styles.icon} />
        </Link>
        <div>
          <nav>
            <ResponsiveMenu
              menuOpenButton={<div><MdMenu/></div>}
              menuCloseButton={<div><MdClose /></div>}
              changeMenuOn="600px"
              largeMenuClassName={styles.largeMenu}
              smallMenuClassName={styles.smallMenu}
              menu={
                <ul>
                {menuLinks.map(link => (
                  <li
                    key={link.name}
                  >
                    <Link activeClassName={styles.active} className={styles.items} to={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              }
            />
          </nav>
        </div>
      </div>
    </div>
  </header>
)
Header.propTypes = {
  menuLinks: PropTypes.array,
}

export default Header
