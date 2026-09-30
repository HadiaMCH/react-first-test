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

import EstimateurCharge from '../EstimateurCharge';


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


      {/* ICÔNE */}

      <div
        style={{
          fontSize: '4rem'
        }}
      >

        {programme.icone}

      </div>


      {/* TITRE */}

      <h1>

        {programme.titre}

      </h1>


      {/* DESCRIPTION */}

      <p>

        {programme.description}

      </p>


      {/* TYPE */}

      <p>

        <strong>
          Type :
        </strong>

        {' '}

        {programme.type}

      </p>


      {/* DURÉE */}

      <p>

        <strong>
          Durée :
        </strong>

        {' '}

        {programme.duree}

      </p>


      {/* =================================
          ESTIMATEUR DE CHARGE
      ================================= */}

      <EstimateurCharge
        programmeTitre={programme.titre}
      >

        <p>

          Entre une estimation des heures
          de cours et des heures d'étude
          personnelle.

        </p>

      </EstimateurCharge>


      {/* =================================
          RETOUR
      ================================= */}

      <Button
        as={Link}
        to="/formations"
        variant="outline-success"
        className="mt-4"
      >

        Retour aux formations

      </Button>


    </Container>

  );

}