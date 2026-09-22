import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Contenu from './components/Contenu';
import Footer from './components/Footer';

import styles from './App.module.css';

export default function App() {

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


  const supprimerProgramme = (id) => {

    setProgrammes(
      programmes.filter(
        programme => programme.id !== id
      )
    );

  };


  return (

    <BrowserRouter>

      <div className={styles.app}>

        <NavBar />

        <main>

          <Contenu
            programmes={programmes}
            onSupprimer={supprimerProgramme}
          />

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );
}