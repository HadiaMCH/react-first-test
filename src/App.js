import React from 'react';

import NavBar from './components/NavBar';
import Contenu from './components/Contenu';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>

      <NavBar />

      <main>
        <Contenu />
      </main>

      <Footer />

    </div>
  );
}

export default App;