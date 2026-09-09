import React from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import MenuFooter from './MenuFooter';
import InfoEcole from './InfoEcole';

import styles from './Footer.module.css';

export default function Footer() {

  return (
    <footer
      id="contact"
      className={styles.footer}
    >

      <Container>

        <Row className="g-5">

          <Col
            md={6}
            lg={5}
          >

            <h4 className={styles.logo}>
              Cégep de La Pocatière
            </h4>

            <p className={styles.description}>
              Un milieu d'apprentissage stimulant,
              innovant et humain pour construire
              l'avenir de nos étudiants.
            </p>

          </Col>


          <Col
            md={3}
            lg={3}
          >
            <MenuFooter />
          </Col>


          <Col
            md={3}
            lg={4}
          >
            <InfoEcole />
          </Col>

        </Row>


        <div className={styles.bottom}>

          <span>
            © 2026 Cégep de La Pocatière
          </span>

          <span>
            Tous droits réservés
          </span>

        </div>

      </Container>

    </footer>
  );
}