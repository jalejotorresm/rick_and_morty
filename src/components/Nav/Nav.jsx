import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.modules.css'

export default function Nav(props) {
  return (
    <div className={styles.navBar}>
      <SearchBar
            onSearch={props.onSearch}
          />
    </div>
  )
}
