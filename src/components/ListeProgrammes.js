import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Badge,
  Alert
} from 'react-bootstrap';

import styles from './ListeProgrammes.module.css';


export default function ListeProgrammes() {


  /* =================================
     ÉTAT : FILTRE
  ================================= */

  const [filtre, setFiltre] = useState('tous');


  /* =================================
     ÉTAT : LISTE DES PROGRAMMES
  ================================= */

  const [programmes, setProgrammes] = useState([
    {
        id: 1,
        titre: "Techniques de l'informatique",
        description:
        "Développez des applications Web, mobiles et logicielles avec les technologies modernes.",
        type: 'informatique',
        duree: '3 ans',
        icone: '💻'
    },

    {
        id: 2,
        titre: 'Développement Web',
        description:
        "Apprenez à créer des interfaces Web modernes et des applications interactives.",
        type: 'informatique',
        duree: 'AEC',
        icone: '🌐'
    },

    {
        id: 3,
        titre: 'Gestion de projets',
        description:
        "Apprenez à planifier, organiser et réaliser des projets professionnels.",
        type: 'administration',
        duree: '2 ans',
        icone: '📊'
    },

    {
        id: 4,
        titre: 'Cybersécurité',
        description:
        "Apprenez à protéger les systèmes informatiques, les réseaux et les données.",
        type: 'informatique',
        duree: 'AEC',
        icone: '🔐'
    },

    {
        id: 5,
        titre: 'Développement mobile',
        description:
        "Concevez des applications mobiles modernes pour différentes plateformes.",
        type: 'informatique',
        duree: 'AEC',
        icone: '📱'
    },

    {
        id: 6,
        titre: 'Bases de données',
        description:
        "Apprenez à concevoir, gérer et exploiter des bases de données.",
        type: 'informatique',
        duree: 'AEC',
        icone: '🗄️'
    },

    {
        id: 7,
        titre: 'Administration des réseaux',
        description:
        "Configurez et administrez des réseaux et des infrastructures informatiques.",
        type: 'informatique',
        duree: '2 ans',
        icone: '🖧'
    },

    {
        id: 8,
        titre: 'Gestion des entreprises',
        description:
        "Développez des compétences en gestion, organisation et administration d’entreprise.",
        type: 'administration',
        duree: '3 ans',
        icone: '🏢'
    },

    {
        id: 9,
        titre: 'Comptabilité et gestion',
        description:
        "Apprenez à gérer les opérations comptables et financières d’une organisation.",
        type: 'administration',
        duree: '3 ans',
        icone: '💰'
    },

    {
        id: 10,
        titre: 'Marketing numérique',
        description:
        "Découvrez les stratégies de communication, de promotion et de marketing sur le Web.",
        type: 'administration',
        duree: 'AEC',
        icone: '📈'
    }

    ]);


  /* =================================
     FONCTION : CHANGER LE FILTRE
  ================================= */

  const choisirFiltre = (nouveauFiltre) => {

    setFiltre(nouveauFiltre);

  };



  /* =================================
     CSS CONDITIONNEL BOOTSTRAP
  ================================= */

  const variantFiltre = (valeur) => {

    return filtre === valeur
      ? 'success'
      : 'outline-success';

  };



  /* =================================
     FILTRER LA LISTE
  ================================= */

  const programmesAffiches =
    programmes.filter((programme) => {

      if (filtre === 'tous') {

        return true;

      }

      return programme.type === filtre;

    });



  /* =================================
     SUPPRIMER UN PROGRAMME
  ================================= */

  const supprimerProgramme = (id) => {

    setProgrammes(

      programmes.filter(
        (programme) => programme.id !== id
      )

    );

  };



  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <div className={styles.wrapper}>


      {/* FILTRES */}

      <div className={styles.toolbar}>

        <h3 className={styles.title}>
          Programmes offerts
        </h3>


        <ButtonGroup>


          <Button
            variant={variantFiltre('tous')}
            onClick={() =>
              choisirFiltre('tous')
            }
          >
            Tous
          </Button>


          <Button
            variant={variantFiltre('informatique')}
            onClick={() =>
              choisirFiltre('informatique')
            }
          >
            Informatique
          </Button>


          <Button
            variant={variantFiltre('administration')}
            onClick={() =>
              choisirFiltre('administration')
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
          className={styles.emptyMessage}
        >

          Aucun programme à afficher
          pour ce filtre.

        </Alert>

      )}



      {/* =================================
          AFFICHER LA LISTE AVEC MAP
      ================================= */}

      <Row className="g-4">


        {programmesAffiches.map((programme) => (

          <Col
            md={6}
            lg={4}
            key={programme.id}
          >

            <Card
              className={styles.programmeCard}
            >

              <Card.Body>


                <div className={styles.icon}>

                  {programme.icone}

                </div>


                <Card.Title>

                  {programme.titre}

                </Card.Title>


                <Badge
                  bg="light"
                  text="dark"
                  className={styles.badge}
                >

                  {programme.type}

                </Badge>


                <Card.Text
                  className={styles.description}
                >

                  {programme.description}

                </Card.Text>


                <Card.Text
                  className={styles.duration}
                >

                  Durée : {programme.duree}

                </Card.Text>


                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() =>
                    supprimerProgramme(programme.id)
                  }
                >

                  Supprimer

                </Button>


              </Card.Body>

            </Card>

          </Col>

        ))}


      </Row>

    </div>

  );
}