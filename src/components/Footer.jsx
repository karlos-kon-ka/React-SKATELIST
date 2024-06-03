// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export  const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center ">
      <div className="container2">
        <p>¿Quieres saber quién soy? ¡Visita mi perfil!</p>
        <div className=" ">
          <a
            href="https://github.com/karlos-kon-ka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
            style={{ fontSize: '30px' }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-p-26034328b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            style={{ fontSize: '30px' }}
          >
            <FaLinkedin />
          </a>
        </div>
        <p> Desarrollado por KARLOS-KON-KA.</p>
      </div>
    </footer>
  );
};


