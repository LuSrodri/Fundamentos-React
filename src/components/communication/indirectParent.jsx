

import React, { useState } from "react"

import IndirectChild from './indirectChild'

export default props => {

    let [name, setName] = useState('?')
    let [age, setAge] = useState(0)
    let [isNerd, setIsNerd] = useState(false)

    // nome idade nerd
    function giveInformation(name, age, isNerd) {
        setName(name)
        setAge(age)
        setIsNerd(isNerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>tem {age} anos </span>
                <span>e {isNerd ? "é Nerd" : "não é Nerd"}</span>
            </div>
            <IndirectChild whenToClick={giveInformation}></IndirectChild>
        </div>
    )
}