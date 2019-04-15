import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styles from './index.module.css'

export default () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Welcome to the Tax Form Filler!</h1>
        <p>
          Using this app, you can fill in your{' '}
          <a href='https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package/5000-r.html'>
            Canadian 2018 Income Tax and Benefit Return
          </a>{' '}
          form with real time updates to calculated fields.
        </p>
        <Link to='/formFiller/' className={styles.cta}>
          Get Started
        </Link>
      </div>
    </Layout>
  )
}
