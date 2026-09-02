import React from 'react'
import Menu from './Menu'

export default function MenuFooter() {
  return (
    <div className="row">
        <div className="col-6">
            <Menu />
        </div>

        <div className="col-6">
           <a href="#">Mission</a>
           <br />

           <a href="#">Objectifs</a>
           <br />

           <a href="#">À propos</a>
        </div>

    </div>
  )
}
