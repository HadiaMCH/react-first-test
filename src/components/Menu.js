import React from 'react';

import { Nav } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import styles from './Menu.module.css';


export default function Menu() {

  const classeLien = ({ isActive }) => {

    return isActive
      ? styles.active
      : styles.link;

  };


  return (

    <Nav className={styles.menu}>

      {/* ACCUEIL */}

      <Nav.Link
        as={NavLink}
        to="/"
        end
        className={classeLien}
      >
        Accueil
      </Nav.Link>


      {/* FORMATIONS */}

      <Nav.Link
        as={NavLink}
        to="/formations"
        className={classeLien}
      >
        Formations
      </Nav.Link>


      {/* À PROPOS */}

      <Nav.Link
        as={NavLink}
        to="/apropos"
        className={classeLien}
      >
        À propos
      </Nav.Link>

    </Nav>

  );
}