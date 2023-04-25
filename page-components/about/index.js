import React from 'react'
import styles from "./about.module.scss"
import { HomeBtn, Footer } from '../../components'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <section className={styles.about_container}>
            <HomeBtn />
            <div className={styles.about_wrapper}>
                <div className={styles.header_cont}>
                    <h1>
                        About.
                    </h1>
                </div>
                <div className={styles.about_box}>
                    <p className={styles.first_p}>
                        My name is Odafe Alaiya. I'm a Frontend Developer from Lagos, Nigeria. I am currently transitioning into Fullstack development with the help of the <Link href="https://www.coursera.org/professional-certificates/meta-back-end-developer#courses" className={styles.about_p_link}>Meta Back-end Developer course</Link>.
                        I began transitioning to Fullstack development primarily because I was interested in understanding the structure behind the structure. Also it has helped me broaden my skillset in order to add value and Insight in areas I would have had no understanding.
                    </p>
                    <p>
                        I currently work with <b>JavaScript, TypeScript, ReactJS</b> and <b>NextJs</b> for frontend logic. I use Vanilla CSS as well as Libraries like <b></b>TailwindCss, Bootstrap for styling. I also work with python in cases where it is needed
                    </p>
                    <p>
                        On the Backend I use <b>NodeJs, ExpressJs and MongoDb</b>.
                    </p>
                    <p>
                        I am currently learning about Open Source and I look forward to making contributions in that respect.
                    </p>
                    <p>The Languages I have uses are:<br></br>
                    </p>
                    <div className={styles.about_tech}>
                        <code>HTML</code>
                        <code>CSS</code>
                        <code>JavaScript</code>
                        <code>Python</code>
                        <code>C</code>
                    </div>
                    <p>Some of the Technologies I have Experience with are:<br></br>
                    </p>
                    <div className={styles.about_tech}>
                        <code>ReactJs</code>
                        <code>NextJs</code>
                        <code>TailwindCss</code>
                        <code>GraphQl</code>
                        <code>GraphCMS</code>
                        <code>ExpressJs</code>
                        <code>MongoDB</code>
                    </div>
                    <p>
                        You can check some of my projects out <Link className={styles.about_p_link} href="/projects">here</Link>.<br></br>Also, I share experiences on the Technologies and concepts I use on my blog <Link className={styles.about_p_link} href="https://odafe.hashnode.dev/">here</Link>.
                    </p>
                    <p>
                        You can reach me on social media through <Link className={styles.about_p_link} href="https://twitter.com/odafetoearth">Twitter</Link> or <Link className={styles.about_p_link} href="https://www.linkedin.com/in/odafe-alaiya-598115203/">LinkenIn</Link>.
                    </p>
                </div>
            </div>
            <Footer />
        </section >
    )
}

export default AboutPage