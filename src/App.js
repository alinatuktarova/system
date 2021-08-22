import React from 'react'
import styles from './App.module.scss';
import Authorization from './components/Authorization/Authorization';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <DropDownMenu />
      <div className={styles.body}>
        <Authorization />
      </div>
      <Footer />
    </div>
  );
}

export default App;
