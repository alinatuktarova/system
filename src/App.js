import React from 'react'
import styles from './App.module.scss';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <DropDownMenu />
      <Footer />
    </div>
  );
}

export default App;
