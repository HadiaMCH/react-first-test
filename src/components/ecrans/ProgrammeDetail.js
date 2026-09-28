import React from 'react';

import {
  useParams,
  Link
} from 'react-router-dom';

import {
  Container,
  Button,
  Alert
} from 'react-bootstrap';


export default function ProgrammeDetail({
  programmes
}) {


  /* =================================
     RÉCUPÉRER ID DANS URL
  ================================= */

  const { id } =
    useParams();


  /* =================================
     TROUVER LE PROGRAMME
  ================================= */

  const programme =
    programmes.find(
      (programme) =>
        String(programme.id) === id
    );


  /* =================================
     PROGRAMME INTROUVABLE
  ================================= */

  if (!programme) {

    return (

      <Container className="py-5">

        <Alert variant="warning">

          Programme introuvable.

        </Alert>


        <Button

          as={Link}

          to="/formations"

          variant="success"

        >

          Retour aux formations

        </Button>

      </Container>

    );

  }


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <Container className="py-5">


      <div
        style={{
          fontSize: '4rem'
        }}
      >

        {programme.icone}

      </div>


      <h1>

        {programme.titre}

      </h1>


      <p>

        {programme.description}

      </p>


      <p>

        <strong>
          Type :
        </strong>

        {' '}

        {programme.type}

      </p>


      <p>

        <strong>
          Durée :
        </strong>

        {' '}

        {programme.duree}

      </p>


      <Button

        as={Link}

        to="/formations"

        variant="outline-success"

      >

        Retour aux formations

      </Button>


    </Container>

  );

}