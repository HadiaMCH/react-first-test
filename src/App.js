import React, {
  useEffect,
  useState
} from 'react';

import {
  BrowserRouter
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Contenu from './components/Contenu';
import Footer from './components/Footer';

import styles from './App.module.css';


const API_URL =
  'http://localhost:3001/programmes';


export default function App() {


  /* =================================
     ÉTATS
  ================================= */

  const [programmes, setProgrammes] =
    useState([]);

  const [chargement, setChargement] =
    useState(true);

  const [erreur, setErreur] =
    useState('');


  /* =================================
     CHARGER LES PROGRAMMES
  ================================= */

  useEffect(() => {

    const chargerProgrammes = async () => {

      try {

        const response =
          await fetch(API_URL);


        if (!response.ok) {

          throw new Error(
            'Erreur de chargement'
          );

        }


        const data =
          await response.json();


        setProgrammes(data);

      }
      catch (err) {

        setErreur(
          'Impossible de charger les programmes.'
        );

      }
      finally {

        setChargement(false);

      }

    };


    chargerProgrammes();

  }, []);


  /* =================================
     SUPPRIMER UN PROGRAMME
  ================================= */

  const supprimerProgramme =
    async (id) => {

      try {

        const response =
          await fetch(
            `${API_URL}/${id}`,
            {
              method: 'DELETE'
            }
          );


        if (!response.ok) {

          throw new Error(
            'Suppression impossible'
          );

        }


        setProgrammes(
          programmes.filter(
            programme =>
              programme.id !== id
          )
        );

      }
      catch (err) {

        setErreur(
          'Impossible de supprimer ce programme.'
        );

      }

    };


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <BrowserRouter>

      <div className={styles.app}>

        <NavBar />


        <main>

          <Contenu

            programmes={programmes}

            onSupprimer={
              supprimerProgramme
            }

            chargement={
              chargement
            }

            erreur={
              erreur
            }

          />

        </main>


        <Footer />

      </div>

    </BrowserRouter>

  );

}