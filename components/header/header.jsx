import React from 'react'
import styles from './header.module.scss'

const Header = () => {
    return (
        <nav className={styles.header_container}>
            <p>/home.</p>
            <p>/projects.</p>
            <p>/about.</p>
            <p>/blog.</p>

        </nav>
    )
}

export default Header