import React from "react";

export default (props) => {
    return(
        <>
            <p>Valor Aleatorio entre {props.min} e {props.max} é {Math.round(Math.random() * (props.max - props.min) + props.min)}</p>
        </> 
    )
}