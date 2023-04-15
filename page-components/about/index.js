import React from 'react'
import styles from "./about.module.scss"
import { HomeBtn } from '../../components'

const AboutPage = () => {
    return (
        <div className={styles.about_container}>
            <HomeBtn />
            <div className={styles.about_wrapper}>
                <div className={styles.header_cont}>
                    <h1>
                        About
                    </h1>
                </div>
                <div className={styles.about_box}>

                </div>
            </div>
        </div >
    )
}

export default AboutPage