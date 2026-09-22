import React from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import styles from '../Contenu.module.css';


export default function Apropos() {

  return (

    <section
      id="apropos"
      className={styles.aboutSection}
    >

      <Container>

        <Row className="align-items-center g-5">

          <Col lg={6}>

            <span className={styles.smallTitle}>
              LE CÉGEP
            </span>


            <h2 className={styles.aboutTitle}>
              Un milieu à dimension humaine
            </h2>


            <p>
              Le Cégep de La Pocatière offre un environnement
              stimulant où les étudiants peuvent apprendre,
              expérimenter et développer leurs compétences.
            </p>


            <p>
              Notre approche favorise la réussite scolaire,
              l'autonomie et la préparation au marché du travail.
            </p>

          </Col>


          <Col lg={6}>

            <Row className="g-3">

              <Col sm={6}>

                <div className={styles.stat}>

                  <strong>
                    20+
                  </strong>

                  <span>
                    Programmes
                  </span>

                </div>

              </Col>


              <Col sm={6}>

                <div className={styles.stat}>

                  <strong>
                    100%
                  </strong>

                  <span>
                    Engagement
                  </span>

                </div>

              </Col>


              <Col sm={6}>

                <div className={styles.stat}>

                  <strong>
                    60+
                  </strong>

                  <span>
                    Années d'expérience
                  </span>

                </div>

              </Col>


              <Col sm={6}>

                <div className={styles.stat}>

                  <strong>
                    1
                  </strong>

                  <span>
                    Communauté
                  </span>

                </div>

              </Col>

            </Row>

          </Col>

        </Row>

      </Container>

    </section>

  );

}