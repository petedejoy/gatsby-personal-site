import React from 'react'
import classnames from "classnames"
import styles from "../css/contactForm.module.css"

const ContactForm = () => {
  return (
    <div>
      <h1 className={styles.contactText}>Get in touch.</h1>
      <form className={styles.form} name="contact" method="POST" data-netlify="true">
        <div className={classnames("row", styles.inputs)}>
          <p className="four white">
            <label>Name: <input type="text" name="name" /></label>
          </p>
          <p className="four white">
            <label>Email: <input type="email" name="email" /></label>
          </p>
        </div>
        <div className={classnames("row", styles.inputs)}>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button className={styles.button} type="submit">Send</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
