

import React, {useState} from "react";
import './input.css'

export default props =>{

    let [valueAux, setValueAux] = useState('')

    let whenChanged = e =>{
        setValueAux(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valueAux}</h2>
            <input value={valueAux} onChange={whenChanged} />
        </div>
    )
}