import "./card.css";
import PropTypes from "prop-types";
import { useState } from "react";

//esto saberse de memmoria 
export const Card = ({nombre = "lisseth",edad}) => {
    //operador ternario 
    const [mostrarEdad, setMostrarEdad] = useState(false);
    return(
        <div>
            <h1>{nombre} y {edad>=18 ? 'es mayor de edad' : 'no en mayor de edad'}</h1>
            <h2>{mostrarEdad? edad : 'edad oculta' }</h2>
            <button onClick={()=>{setMostrarEdad(!mostrarEdad)}}>Mostrar edad</button>
        </div>

    )
}

Card.propTypes = {
    edad: PropTypes.number.isRequired
}