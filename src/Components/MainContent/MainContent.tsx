import { TypeContentText, MAIN_CONTENT_TEXTS } from '../../Utilities'

import styles from './MainContent.module.scss'

const MainContent = () => {
    return (
        <section className={styles.container}>
            <div className={styles.cell}>{MAIN_CONTENT_TEXTS[0].text}</div>
            {MAIN_CONTENT_TEXTS.map((content: TypeContentText, index: number) => {
                return (
                    content.title ?
                        <div className={styles.cell} key={index}>
                            <img src={content.image ? content.image : ``} alt={content.title} />
                            <div className={styles.title}>{content.title}</div>
                            <div className={styles.text}>{content.text}</div>
                            <div className={styles.getStarted}>Get Started</div>
                        </div> : ``
                )
            })}
            <div className={styles.background}></div>
        </section>
    )
}

export default MainContent