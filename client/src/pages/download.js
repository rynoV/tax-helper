import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'

import styles from './download.module.css'

export default () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p>Your form was successfully processed!</p>
        </div>
        <div className={styles.actions}>
          <form action='/api/download' method='get' acceptCharset='utf-8'>
            <input
              type='submit'
              value='Download'
              name='download'
              id='download'
            />
          </form>
          <Link to='/formFiller/'>Back to form filler</Link>
        </div>
      </div>
    </Layout>
  )
}
