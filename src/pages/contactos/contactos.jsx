import React from "react";
import "./contactos.css";

export const Contactos = () => {
  return (
    <section className="contactos">

      <div className="contactos-content">

        <h1>Contáctanos</h1>

        <p>
          Si tienes alguna duda o deseas más información,
          no dudes en comunicarte con nosotros.
        </p>

        <div className="contactos-info">
          <p>correo@ejemplo.com</p>
          <p>+52 123 456 7890</p>
        </div>

      </div>

    </section>
  );
};