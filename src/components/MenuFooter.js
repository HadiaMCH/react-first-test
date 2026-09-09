import React from 'react';

import styles from './MenuFooter.module.css';

export default function MenuFooter() {

  return (
    <div>

      <h5 className={styles.title}>
        Liens rapides
      </h5>

      <div className={styles.links}>

        <a href="#">
          Les formations
        </a>

        <a href="#">
          Services aux étudiants
        </a>

        <a href="#">
          À propos
        </a>

        <a href="#">
          Nous joindre
        </a>

      </div>

    </div>
  );
}