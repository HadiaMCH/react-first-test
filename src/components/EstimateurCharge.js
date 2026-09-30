import React, {
  useState
} from 'react';


export default function EstimateurCharge(
  props
) {


  /* =================================
     ÉTATS
  ================================= */

  const [
    heuresCours,
    setHeuresCours
  ] = useState('');


  const [
    heuresEtude,
    setHeuresEtude
  ] = useState('');


  const [
    total,
    setTotal
  ] = useState(null);


  /* =================================
     CALCULER LA CHARGE
  ================================= */

  const calculerCharge = () => {

    const totalCalcule =
      Number(heuresCours)
      +
      Number(heuresEtude);


    setTotal(
      totalCalcule
    );

  };


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <section className="estimateur-charge">


      {/* TITRE */}

      <h3>

        Charge hebdomadaire

      </h3>


      {/* PROP */}

      <p>

        {props.programmeTitre}

      </p>


      {/* CHILDREN */}

      {props.children}


      {/* =================================
          HEURES DE COURS
      ================================= */}

      <p>

        <label htmlFor="heuresCours">

          Heures de cours

        </label>

        <br />

        <input

          id="heuresCours"

          type="number"

          min="0"

          value={
            heuresCours
          }

          onChange={
            (e) =>
              setHeuresCours(
                e.target.value
              )
          }

        />

      </p>


      {/* =================================
          HEURES D'ÉTUDE
      ================================= */}

      <p>

        <label htmlFor="heuresEtude">

          Heures d'étude

        </label>

        <br />

        <input

          id="heuresEtude"

          type="number"

          min="0"

          value={
            heuresEtude
          }

          onChange={
            (e) =>
              setHeuresEtude(
                e.target.value
              )
          }

        />

      </p>


      {/* =================================
          BOUTON
      ================================= */}

      <button

        type="button"

        onClick={
          calculerCharge
        }

      >

        Calculer

      </button>


      {/* =================================
          RÉSULTAT
      ================================= */}

      {total !== null && (

        <p>

          <strong>

            Total :
            {' '}
            {total}
            {' '}
            h / semaine

          </strong>

        </p>

      )}


    </section>

  );

}