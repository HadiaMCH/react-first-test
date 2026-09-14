import React from 'react';

import {
  Card,
  Button,
  Badge
} from 'react-bootstrap';

import styles from './ProgrammeCard.module.css';


export default function ProgrammeCard({
  programme,
  onSupprimer
}) {

  return (

    <Card className={styles.programmeCard}>

      <Card.Body>


        {/* ICÔNE */}

        <div className={styles.icon}>

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
          className={styles.badge}
        >

          {programme.type}

        </Badge>


        {/* DESCRIPTION */}

        <Card.Text
          className={styles.description}
        >

          {programme.description}

        </Card.Text>


        {/* DURÉE */}

        <Card.Text
          className={styles.duration}
        >

          Durée : {programme.duree}

        </Card.Text>


        {/* ACTION */}

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() =>
            onSupprimer(programme.id)
          }
        >

          Supprimer

        </Button>


      </Card.Body>

    </Card>

  );
}