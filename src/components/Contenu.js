import React from 'react';

import {
  Routes,
  Route
} from 'react-router-dom';

import Acceuil from './ecrans/Acceuil';
import Formations from './ecrans/Formations';
import Apropos from './ecrans/Apropos';
import ProgrammeDetail from './ecrans/ProgrammeDetail';


export default function Contenu({

  programmes,
  onSupprimer,
  chargement,
  erreur

}) {

  return (

    <Routes>


      {/* =================================
          ACCUEIL
      ================================= */}

      <Route

        path="/"

        element={
          <Acceuil />
        }

      />


      {/* =================================
          FORMATIONS
      ================================= */}

      <Route

        path="/formations"

        element={

          <Formations

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

        }

      />


      {/* =================================
          DÉTAIL D'UN PROGRAMME
      ================================= */}

      <Route

        path="/formations/:id"

        element={

          <ProgrammeDetail
            programmes={
              programmes
            }
          />

        }

      />


      {/* =================================
          À PROPOS
      ================================= */}

      <Route

        path="/apropos"

        element={
          <Apropos />
        }

      />


    </Routes>

  );

}