import React from 'react'
import { Link } from 'gatsby'

import styles from './layout.module.css'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <ul>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/formFiller/'>Form Filler</ListLink>
      </ul>
    </header>
    {children}
    <footer>Made by Calum Sieppert</footer>
  </div>
)
