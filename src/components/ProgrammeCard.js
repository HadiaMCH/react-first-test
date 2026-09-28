import React, {
  useState
} from 'react';

import {

  Card,
  Button,
  Badge

} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

import Modal
  from './Modal';

import styles
  from './ProgrammeCard.module.css';


export default function ProgrammeCard({

  programme,
  onSupprimer

}) {


  /* =================================
     ÉTAT : MODALE
  ================================= */

  const [
    afficheModal,
    setAfficheModal
  ] = useState(false);


  /* =================================
     OUVRIR LA MODALE
  ================================= */

  const afficherModal = () => {

    setAfficheModal(true);

  };


  /* =================================
     FERMER LA MODALE
  ================================= */

  const masquerModal = () => {

    setAfficheModal(false);

  };


  /* =================================
     CONFIRMER LA SUPPRESSION
  ================================= */

  const confirmerSuppression =
    () => {

      onSupprimer(
        programme.id
      );

      setAfficheModal(false);

    };


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <>


      <Card
        className={
          styles.programmeCard
        }
      >

        <Card.Body>


          {/* ICÔNE */}

          <div
            className={
              styles.icon
            }
          >

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

            className={
              styles.badge
            }

          >

            {programme.type}

          </Badge>


          {/* DESCRIPTION */}

          <Card.Text
            className={
              styles.description
            }
          >

            {
              programme.description
            }

          </Card.Text>


          {/* DURÉE */}

          <Card.Text
            className={
              styles.duration
            }
          >

            Durée :
            {' '}
            {programme.duree}

          </Card.Text>


          {/* ACTIONS */}

          <div
            className="d-flex gap-2"
          >


            <Button

              as={Link}

              to={
                `/formations/${programme.id}`
              }

              variant="outline-success"

              size="sm"

            >

              Voir détails

            </Button>


            <Button

              variant="outline-danger"

              size="sm"

              onClick={
                afficherModal
              }

            >

              Supprimer

            </Button>


          </div>


        </Card.Body>

      </Card>


      {/* =================================
          MODALE DE CONFIRMATION
      ================================= */}

      {afficheModal && (

        <Modal
          masquerModal={
            masquerModal
          }
        >

          <h4>

            Supprimer le programme

          </h4>


          <p>

            Voulez-vous vraiment
            supprimer le programme
            {' '}

            <strong>

              {programme.titre}

            </strong>

            ?

          </p>


          <div
            className="
              d-flex
              gap-2
              mt-3
            "
          >

            <Button

              variant="danger"

              size="sm"

              onClick={
                confirmerSuppression
              }

            >

              Confirmer
              la suppression

            </Button>

          </div>


        </Modal>

      )}


    </>

  );

}