import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <img src="./images/logo-light.svg" alt="" />
            <div className={styles.getStarted}>Get Started</div>
        </footer>
    )
}

export default Footer