import React from 'react'
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.scss';
import Authorization from './components/Authorization/Authorization';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <DropDownMenu />
      <div className={styles.body}>
        <Switch>
          <Route path="/diary">
            <Main />
          </Route>
          <Route path="/">
            <Authorization />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
