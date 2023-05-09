import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <img src="./images/logo-dark.svg" alt="logo" />
            <div className={styles.getStarted}>Get Started</div>
        </header>
    )
}

export default Header