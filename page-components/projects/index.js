import React from 'react'
import styles from "./proj.module.scss"
import { HomeBtn } from '../../components'
import Link from 'next/link'

const ProjectsPage = () => {
    const projects = [
        {
            name: "GraphBlog",
            excerpt: "A blog site to upload and read stories in real time",
            live: "",
            gh: "",
            tools: "Next.Js, Tailwindcss, graphql, graphCMS"
        },
        {
            name: "King's CLothing",
            excerpt: "An e-commerce site",
            live: "",
            gh: "",
            tools: "React, Sass, Redux, React Router"
        },
        {
            name: "Twitgram",
            excerpt: "A real-time social media app",
            live: "",
            gh: "",
            tools: ""
        },
    ]
    return (
        <div className={styles.proj_page_container}>
            <HomeBtn />
            <div className={styles.proj_wrapper}>
                <div className={styles.header_cont}>
                    <h1>Projects</h1>
                    <p>A few noteworthy things I've built:</p>
                </div>
                <div className={styles.proj_cont}>
                    {
                        projects.map((project) => {
                            return (
                                <section key={project.name} className={styles.proj_box}>
                                    <div className={styles.box_intro}>
                                        <div className={styles.proj_ex}>
                                            <h4>{project.name}</h4>
                                            <p>{project.excerpt}</p>
                                        </div>
                                        <div className={styles.proj_links}>
                                            <Link className={styles.link} href={project.live}>Live</Link>
                                            <Link className={styles.link} href={project.gh}>Github</Link>
                                        </div>
                                    </div>
                                    <p><span>Tools:</span> {project.tools}</p>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ProjectsPage