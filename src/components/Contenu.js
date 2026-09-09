import React from 'react';

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge
} from 'react-bootstrap';

import imageCampus from '../assets/NYC.png';

import styles from './Contenu.module.css';

export default function Contenu({
  sectionActive,
  changerSection
}) {

  return (
    <>


      {/* =================================
          SECTION PRINCIPALE
      ================================= */}

      {sectionActive === 'accueil' && (

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
                    className={styles.primaryButton}
                    onClick={() =>
                      changerSection('formations')
                    }
                  >
                    Découvrir nos formations
                  </Button>


                  <Button
                    variant="outline-secondary"
                    className={styles.secondaryButton}
                    onClick={() =>
                      changerSection('apropos')
                    }
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

      )}



      {/* =================================
          FORMATIONS
      ================================= */}

      {sectionActive === 'formations' && (

        <section
          id="formations"
          className={styles.section}
        >

          <Container>

            <div className={styles.sectionHeader}>

              <span className={styles.smallTitle}>
                NOS PROGRAMMES
              </span>

              <h2>
                Trouvez la formation qui vous ressemble
              </h2>

              <p>
                Des programmes conçus pour préparer les étudiants
                aux réalités du marché du travail et aux études
                universitaires.
              </p>

            </div>


            <Row className="g-4">


              {/* INFORMATIQUE */}

              <Col md={6} lg={4}>

                <Card className={styles.card}>

                  <Card.Body>

                    <div className={styles.icon}>
                      💻
                    </div>

                    <Card.Title>
                      Informatique
                    </Card.Title>

                    <Card.Text>

                      Développez des applications Web,
                      mobiles et logicielles avec les
                      technologies modernes.

                    </Card.Text>

                    <a
                      href="#services"
                      className={styles.cardLink}
                    >
                      Découvrir →
                    </a>

                  </Card.Body>

                </Card>

              </Col>



              {/* TECHNOLOGIE */}

              <Col md={6} lg={4}>

                <Card className={styles.card}>

                  <Card.Body>

                    <div className={styles.icon}>
                      ⚙️
                    </div>

                    <Card.Title>
                      Technologie
                    </Card.Title>

                    <Card.Text>

                      Apprenez à concevoir, analyser et réaliser
                      des solutions techniques innovantes.

                    </Card.Text>

                    <a
                      href="#services"
                      className={styles.cardLink}
                    >
                      Découvrir →
                    </a>

                  </Card.Body>

                </Card>

              </Col>



              {/* FORMATION GÉNÉRALE */}

              <Col md={6} lg={4}>

                <Card className={styles.card}>

                  <Card.Body>

                    <div className={styles.icon}>
                      🎓
                    </div>

                    <Card.Title>
                      Formation générale
                    </Card.Title>

                    <Card.Text>

                      Développez vos compétences, votre créativité
                      et votre capacité à communiquer.

                    </Card.Text>

                    <a
                      href="#services"
                      className={styles.cardLink}
                    >
                      Découvrir →
                    </a>

                  </Card.Body>

                </Card>

              </Col>

            </Row>

          </Container>

        </section>

      )}



      {/* =================================
          À PROPOS
      ================================= */}

      {sectionActive === 'apropos' && (

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

      )}

    </>
  );
}