import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Contenu from './components/Contenu';
import Footer from './components/Footer';

import styles from './App.module.css';

export default function App() {

  const [sectionActive, setSectionActive] = useState('accueil');

  return (
    <div className={styles.app}>

      <NavBar
        sectionActive={sectionActive}
        changerSection={setSectionActive}
      />

      <main>
        <Contenu
          sectionActive={sectionActive}
          changerSection={setSectionActive}
        />
      </main>

      <Footer />

    </div>
  );
}