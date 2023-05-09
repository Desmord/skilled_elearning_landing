import Header from '../Header/Header';
import Hero from '../Hero/Hero';

import '../../global.scss'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
