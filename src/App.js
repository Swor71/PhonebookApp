import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className={styles.AppIntro}>
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;
