import React from 'react';

import {
  Container
} from 'react-bootstrap';

import ListeProgrammes
  from '../ListeProgrammes';

import styles
  from '../Contenu.module.css';


export default function Formations({

  programmes,
  onSupprimer,
  chargement,
  erreur

}) {

  return (

    <section

      id="formations"

      className={
        styles.section
      }

    >

      <Container>


        {/* =================================
            EN-TÊTE
        ================================= */}

        <div
          className={
            styles.sectionHeader
          }
        >

          <span
            className={
              styles.smallTitle
            }
          >

            NOS PROGRAMMES

          </span>


          <h2>

            Trouvez la formation
            qui vous ressemble

          </h2>


          <p>

            Des programmes conçus
            pour préparer les étudiants
            aux réalités du marché
            du travail et aux études
            universitaires.

          </p>

        </div>


        {/* =================================
            LISTE DES PROGRAMMES
        ================================= */}

        <ListeProgrammes

          programmes={
            programmes
          }

          onSupprimer={
            onSupprimer
          }

          chargement={
            chargement
          }

          erreur={
            erreur
          }

        />


      </Container>

    </section>

  );

}