

import React from "react"

export default props => {
    return (
        <div>
            <span>{props.name} </span>
            <span>tem {props.age} anos </span>
            <span>e {props.isNerd ? 'é Nerd' : 'não é Nerd'}</span>
        </div>
    )
}