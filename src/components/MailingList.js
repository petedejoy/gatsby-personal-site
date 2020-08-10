import React from 'react'
import classnames from "classnames"
import styles from "../css/mailingList.module.css"

const MailingList = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} name="mailing" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="mailing" />
        <div className={classnames(styles.padding)}>
          <p className={classnames(styles.label)}>
             <input type="email" name="email" placeholder="Email" className={styles.input} />
          </p>
        </div>
        <div className={classnames(styles.padding)}>
          <p>
            <button className={styles.button} type="submit">Subscribe for Updates</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default MailingList
