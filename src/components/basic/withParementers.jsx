import React from "react"


export default function WithParementers(props) {
    return(
        <div>
            <h3>{props.titulo}</h3>
            <h4>{props.subtitulo}</h4>
        </div>
    )
}