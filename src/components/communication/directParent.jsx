

import React from "react"

import DirectChild from './directChild'

export default props => {
    return (
        <div>
            <DirectChild name="Zé" age="20" isNerd={true}></DirectChild>
            <DirectChild name="Chico" age="13" isNerd={false}></DirectChild>
            <DirectChild name="Luizinho" age="11" isNerd={false}></DirectChild>
            <DirectChild name="Raimundo" age="23" isNerd={false}></DirectChild>
        </div>
    )
}