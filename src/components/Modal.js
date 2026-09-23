import React from 'react';

import { Button } from 'react-bootstrap';

import styles from './Modal.module.css';


export default function Modal({
  children,
  masquerModal
}) {

  return (

    <div className={styles.arrierePlan}>

      <div className={styles.modal}>

        {children}


        <Button
          variant="secondary"
          size="sm"
          onClick={masquerModal}
        >

          Annuler

        </Button>

      </div>

    </div>

  );

}