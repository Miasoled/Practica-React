/*

Desarrolle un componente en React 
denominado UserCard que reciba propiedades para mostrar la información de un usuario, 
incluyendo nombre y url como campos obligatorios, y edad y activo como opcionales (este último con valor por defecto true); 
el componente debe validar las props, mostrar la edad únicamente si es proporcionada, renderizar dinámicamente el estado del 
usuario (“Usuario activo” o “Usuario inactivo”) mediante operador ternario.
*/

import PropTypes from "prop-types";
import "./UserCard.css"

export const UserCard = ({nombre,url, edad,activo=true}) => {
    return(

        <div className="usu">
            <h1>El nombre del usuario es {nombre}</h1>
            <img src={url} alt="" />
             <p>Edad: {edad}</p>
            <p>
                {activo ? "Usuario activo" : "Usuario inactivo"}
            </p>
        </div>
    )

}

UserCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    activo: PropTypes.bool  
}