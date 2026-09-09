import React from 'react';

import { Nav } from 'react-bootstrap';

import styles from './Menu.module.css';

export default function Menu({
  sectionActive,
  changerSection
}) {

  return (
    <Nav className={styles.menu}>

      {/* ACCUEIL */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'accueil'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('accueil');
        }}
      >
        Accueil
      </Nav.Link>


      {/* FORMATIONS */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'formations'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('formations');
        }}
      >
        Formations
      </Nav.Link>


      {/* À PROPOS */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'apropos'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('apropos');
        }}
      >
        À propos
      </Nav.Link>

    </Nav>
  );
}