import React from "react";
import "./nosotros.css";

export const Nosotros = () => {
  return (
    <section className="nosotros">

      <div className="nosotros-container">

        <div className="nosotros-content">

          <span className="nosotros-tag">
            Sobre Nosotros
          </span>

          <h1 className="nosotros-title">
            Conoce más sobre nuestro equipo
          </h1>

          <p className="nosotros-text">
            Somos un equipo apasionado por crear experiencias digitales
            modernas y funcionales para mejorar cada proyecto.
          </p>

          <button className="nosotros-btn">
            Leer más
          </button>

        </div>

        <div className="nosotros-card">

          <h2>Nuestra misión</h2>

          <p>
            Trabajamos con creatividad, innovación y compromiso para
            brindar soluciones profesionales adaptadas a cada cliente.
          </p>

        </div>

      </div>

    </section>
  );
};