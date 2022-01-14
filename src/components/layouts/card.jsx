import "./card.css"

import React from "react";

export default props => {

    const styleAux = {
        backgroundColor: props.color || "#DFFF00",
        borderColor: props.color || "#DFFF00"
    }

    return (
        <div className="card" style={styleAux}>
            <div className="title">{props.title}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}