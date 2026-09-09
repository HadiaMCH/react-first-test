import React from 'react';

import styles from './InfoEcole.module.css';

export default function InfoEcole() {

  return (
    <div className={styles.info}>

      <h5 className={styles.title}>
        Cégep de La Pocatière
      </h5>

      <p>
        104, 4ième Avenue
      </p>

      <p>
        La Pocatière
      </p>

      <a
        href="#"
        className={styles.contact}
      >
        Nous contacter
      </a>

    </div>
  );
}