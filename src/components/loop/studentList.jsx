
import React from "react";

import students from '../../data/student'

export default props => {

    const studentsLi = students.map( student => {
        return (
            <li key={student.id}>
                {student.id} - {student.name} : Nota {student.grade}
            </li>
        )
    })

    return (
        <div> 
            <ul style={{listStyle : "none"}}>
                {studentsLi}
            </ul>
        </div>
    )
}