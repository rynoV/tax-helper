import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

import styles from './download.module.css'

export default () => {
  return (
    <Layout>
      <form
        id='download'
        action='/api/download'
        method='get'
        acceptCharset='utf-8'
      />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Your form was successfully processed!</h3>
        </div>
        <div className={styles.actions}>
          <input
            form='download'
            type='submit'
            value='Download'
            name='download'
            id='download'
            className={styles.button}
          />
          <Link className={styles.buttonSecondary} to='/formFiller/'>
            Go back
          </Link>
        </div>
      </div>
    </Layout>
  )
}
