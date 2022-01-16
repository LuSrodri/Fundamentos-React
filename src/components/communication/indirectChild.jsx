

import React from "react"

export default props => {
    let age = () => parseInt(Math.random() * (100 -1 )) + 1
    let isNerd = () => Math.random() > 0.5
    return (

        <div>
            <div>Child</div>
            <button onClick={ (e) => props.whenToClick('Mario', age, isNerd)}>Fornecer Informações</button>
        </div>
    )
}