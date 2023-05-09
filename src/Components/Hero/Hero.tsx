import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Maximize skill,<br></br>
                    minimize budget
                </div>
                <div className={styles.text}>
                    Our modern courses across a range of in-demand
                    skills will give you the knowledge you need to live
                    the life you want.
                </div>
                <div className={styles.getStarted}>Get Started</div>
            </div>
            <img src="./images/image-hero-desktop.png" alt="" />
        </section>
    )
}

export default Hero;