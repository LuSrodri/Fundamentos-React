

import React from "react";

export default props => {
    return (
        <span>
            <button onClick={props.decrement} >-</button>
            <button onClick={props.increment} >+</button>
        </span>
    )
}