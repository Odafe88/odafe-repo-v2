import React from 'react'
import styles from './header.module.scss'
import Link from "next/link"

const Header = () => {
    return (
        <nav className={styles.header_container}>
            <p><Link href="/about">/about.</Link></p>
            <p><Link href="https://odafe.hashnode.dev/">/blog.</Link></p>
            <p><Link href="/projects">/projects.</Link></p>
        </nav>
    )
}

export default Header