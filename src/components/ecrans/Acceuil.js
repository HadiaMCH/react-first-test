import React from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  Badge
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import imageCampus from '../../assets/NYC.png';

import styles from '../Contenu.module.css';


export default function Acceuil() {

  return (

    <section
      id="accueil"
      className={styles.hero}
    >

      <Container>

        <Row className="align-items-center g-5">

          <Col lg={6}>

            <Badge
              bg="light"
              text="dark"
              className={styles.badge}
            >
              Bienvenue au Cégep
            </Badge>


            <h1 className={styles.title}>

              Construisez votre avenir

              <span>
                {' '}au Cégep de La Pocatière
              </span>

            </h1>


            <p className={styles.description}>

              Découvrez un milieu d'apprentissage dynamique,
              humain et innovant où chaque étudiant peut
              développer son plein potentiel.

            </p>


            <div className={styles.buttons}>

              <Button
                as={Link}
                to="/formations"
                className={styles.primaryButton}
              >
                Découvrir nos formations
              </Button>


              <Button
                as={Link}
                to="/apropos"
                variant="outline-secondary"
                className={styles.secondaryButton}
              >
                En savoir plus
              </Button>

            </div>

          </Col>


          <Col lg={6}>

            <div className={styles.imageContainer}>

              <img
                src={imageCampus}
                alt="Expérience étudiante"
                className={styles.heroImage}
              />


              <div className={styles.imageCard}>

                <strong>
                  Une expérience unique
                </strong>

                <span>
                  Étudier, apprendre et évoluer.
                </span>

              </div>

            </div>

          </Col>

        </Row>

      </Container>

    </section>

  );

}