
import React from "react";


export default props =>{
    let number = Math.round(Math.random() * (100 - 1) + 1);
    let isEvenNumber = number % 2 === 0;
    return (
        <div>
            {number} é
            { isEvenNumber ? 
            <span> Par</span> :
            <span> Ímpar</span>}
        </div>
    )
}