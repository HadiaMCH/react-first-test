import React from 'react';

import cegep from '../assets/cegep logo.png';

import styles from './ImageCegep.module.css';

export default function ImageCegep() {

  return (
    <img
      src={cegep}
      alt="Cégep de La Pocatière"
      className={styles.logo}
    />
  );
}