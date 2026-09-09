import React from 'react';

import { Nav } from 'react-bootstrap';

import styles from './Menu.module.css';

export default function Menu({ changerSection }) {

  return (
    <Nav className={styles.menu}>

      <Nav.Link
        href="#"
        className={styles.link}
        onClick={(event) => {
          event.preventDefault();
          changerSection('accueil');
        }}
      >
        Accueil
      </Nav.Link>


      <Nav.Link
        href="#"
        className={styles.link}
        onClick={(event) => {
          event.preventDefault();
          changerSection('formations');
        }}
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
        onClick={(event) => {
          event.preventDefault();
          changerSection('apropos');
        }}
      >
        À propos
      </Nav.Link>


      <Nav.Link
        href="#contact"
        className={styles.contact}
      >
        Nous joindre
      </Nav.Link>

    </Nav>
  );
}

