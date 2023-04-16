import React from 'react'
import styles from "./home.module.scss"
import { Header, Footer } from '../../components'

const HomePage = () => {
    return (
        <section className={styles.home_container}>

            <div className={styles.home_intro}>
                <div>
                    <h1>
                        Odafe Alaiya
                    </h1>
                    <h5>Web developer</h5>
                </div>
                <Header />
            </div>
            <Footer />
        </section>
    )
}

export default HomePage