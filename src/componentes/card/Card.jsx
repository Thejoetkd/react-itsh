import React from "react";
import './Card.css'

const Card = ({img, nombre, tipo}) => {
    const backgroundColor = () => {
        switch(tipo){
            case 'planta':
                return '#00800078';
            case 'agua':
                return '#00c6ff7d';
            case 'fuego':
                return '#ffa5008c';
            case 'bicho':
                return '#8882ee82'
            case 'electrico':
                return '#ffff007d'
            case 'tierra':
                return '#7b5b178a'
                
            default: return 'none'
        }
    }
    
    return(
        <article style={{background: backgroundColor()}}>
            <img src={img} alt="Pokemon" />
            <p className="text">
                {nombre}
            </p>
        </article>
    )
}
export default Card