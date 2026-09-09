import React from 'react';

import { Nav } from 'react-bootstrap';

import styles from './Menu.module.css';

export default function Menu() {

  return (
    <Nav className={styles.menu}>

      <Nav.Link
        href="#"
        className={styles.link}
      >
        Accueil
      </Nav.Link>

      <Nav.Link
        href="#"
        className={styles.link}
      >
        Formations
      </Nav.Link>

      <Nav.Link
        href="#"
        className={styles.link}
      >
        Services
      </Nav.Link>

      <Nav.Link
        href="#"
        className={styles.link}
      >
        À propos
      </Nav.Link>

      <Nav.Link
        href="#"
        className={styles.contact}
      >
        Nous joindre
      </Nav.Link>

    </Nav>
  );
}