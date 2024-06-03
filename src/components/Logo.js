import React from 'react'
import animaskate from '../assets/animaskate.gif'


function Logo() {
  return (
    <div>
            <img src={animaskate} alt="Descripción de la imagen" className="imagen" />

      <h1 className="titulo">Lista de trucos</h1>
      <p  className="  bg-dark text-light descripcion">
        ¡Prepára tus <span>SESSIONS</span> con tu lista de <span>TRUCOS</span>! <br/>
        Añade a la lista los trucos que vas a hacer hoy y <span>¡COMPLETALOS!</span>.
      </p>
    </div>
  )
}

export default Logo
