import React, {
  useState
} from 'react';

import {

  Row,
  Col,
  Button,
  ButtonGroup,
  Alert

} from 'react-bootstrap';

import ProgrammeCard
  from './ProgrammeCard';

import styles
  from './ListeProgrammes.module.css';


export default function ListeProgrammes({

  programmes,
  onSupprimer,
  chargement,
  erreur

}) {


  /* =================================
     ÉTAT : FILTRE
  ================================= */

  const [filtre, setFiltre] =
    useState('tous');


  /* =================================
     FONCTION : CHANGER LE FILTRE
  ================================= */

  const choisirFiltre =
    (nouveauFiltre) => {

      setFiltre(
        nouveauFiltre
      );

    };


  /* =================================
     CSS CONDITIONNEL BOOTSTRAP
  ================================= */

  const variantFiltre =
    (valeur) => {

      return filtre === valeur
        ? 'success'
        : 'outline-success';

    };


  /* =================================
     CAS : CHARGEMENT
  ================================= */

  if (chargement) {

    return (

      <Alert variant="info">

        Chargement des programmes...

      </Alert>

    );

  }


  /* =================================
     CAS : ERREUR
  ================================= */

  if (erreur) {

    return (

      <Alert variant="danger">

        {erreur}

      </Alert>

    );

  }


  /* =================================
     FILTRER LA LISTE
  ================================= */

  const programmesAffiches =
    programmes.filter(
      (programme) => {

        if (
          filtre === 'tous'
        ) {

          return true;

        }

        return (
          programme.type === filtre
        );

      }
    );


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <div className={styles.wrapper}>


      {/* =================================
          FILTRES
      ================================= */}

      <div className={styles.toolbar}>


        <h3 className={styles.title}>

          Programmes offerts

        </h3>


        <ButtonGroup>


          <Button

            variant={
              variantFiltre(
                'tous'
              )
            }

            onClick={() =>
              choisirFiltre(
                'tous'
              )
            }

          >

            Tous

          </Button>


          <Button

            variant={
              variantFiltre(
                'informatique'
              )
            }

            onClick={() =>
              choisirFiltre(
                'informatique'
              )
            }

          >

            Informatique

          </Button>


          <Button

            variant={
              variantFiltre(
                'administration'
              )
            }

            onClick={() =>
              choisirFiltre(
                'administration'
              )
            }

          >

            Administration

          </Button>


        </ButtonGroup>

      </div>


      {/* =================================
          CAS : LISTE VIDE
      ================================= */}

      {programmesAffiches.length === 0 && (

        <Alert

          variant="warning"

          className={
            styles.emptyMessage
          }

        >

          Aucun programme
          à afficher
          pour ce filtre.

        </Alert>

      )}


      {/* =================================
          MAP + PROPS
      ================================= */}

      <Row className="g-4">

        {programmesAffiches.map(
          (programme) => (

            <Col

              md={6}

              lg={4}

              key={
                programme.id
              }

            >

              <ProgrammeCard

                programme={
                  programme
                }

                onSupprimer={
                  onSupprimer
                }

              />

            </Col>

          )
        )}

      </Row>


    </div>

  );

}