import React from 'react'
import Link from 'next/link'
import styles from "./home_btn.module.scss"
import { HiArrowLeft } from "react-icons/hi"

const HomeBtn = () => {
    return (
        <div className={styles.btn_cont}>
            <Link href="/" className={styles.link_box}>
                <HiArrowLeft /> Home
            </Link>
        </div>
    )
}

export default HomeBtn