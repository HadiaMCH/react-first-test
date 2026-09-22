import React from 'react';

import {
  Container,
  Card,
  Badge,
  Button,
  Alert
} from 'react-bootstrap';

import {
  useParams,
  Link
} from 'react-router-dom';

import styles from '../Contenu.module.css';


export default function ProgrammeDetail({
  programmes
}) {

  /* =================================
     RÉCUPÉRER L'ID DEPUIS L'URL
  ================================= */

  const { id } = useParams();


  /* =================================
     TROUVER LE PROGRAMME
  ================================= */

  const programme = programmes.find(
    (programme) =>
      programme.id === Number(id)
  );


  /* =================================
     PROGRAMME INTROUVABLE
  ================================= */

  if (!programme) {

    return (

      <section className={styles.section}>

        <Container>

          <Alert variant="warning">

            Programme introuvable.

          </Alert>


          <Button
            as={Link}
            to="/formations"
            variant="outline-success"
          >
            Retour aux formations
          </Button>

        </Container>

      </section>

    );

  }


  /* =================================
     AFFICHAGE DU PROGRAMME
  ================================= */

  return (

    <section className={styles.section}>

      <Container>

        <div className={styles.sectionHeader}>

          <span className={styles.smallTitle}>
            DÉTAIL DU PROGRAMME
          </span>


          <h2>
            {programme.titre}
          </h2>

        </div>


        <Card>

          <Card.Body>


            {/* ICÔNE */}

            <div className="fs-1 mb-3">

              {programme.icone}

            </div>


            {/* TITRE */}

            <Card.Title>

              {programme.titre}

            </Card.Title>


            {/* TYPE */}

            <Badge
              bg="light"
              text="dark"
              className="mb-3"
            >

              {programme.type}

            </Badge>


            {/* DESCRIPTION */}

            <Card.Text>

              {programme.description}

            </Card.Text>


            {/* DURÉE */}

            <Card.Text>

              <strong>
                Durée :
              </strong>

              {' '}

              {programme.duree}

            </Card.Text>


            {/* RETOUR */}

            <Button
              as={Link}
              to="/formations"
              variant="outline-success"
            >

              Retour aux formations

            </Button>


          </Card.Body>

        </Card>

      </Container>

    </section>

  );

}