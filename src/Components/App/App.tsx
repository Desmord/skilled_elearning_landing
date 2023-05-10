import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import MainContent from '../MainContent/MainContent';

import '../../global.scss'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <MainContent />
    </div>
  );
}

export default App;
