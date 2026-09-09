import React from 'react';

import {
  Navbar,
  Container
} from 'react-bootstrap';

import ImageCegep from './ImageCegep';
import Menu from './Menu';

import styles from './NavBar.module.css';

export default function NavBar() {

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={styles.navbar}
    >

      <Container>

        <Navbar.Brand href="#">
          <ImageCegep />
        </Navbar.Brand>

        <div className="ms-auto">
          <Menu />
        </div>

      </Container>

    </Navbar>
  );
}