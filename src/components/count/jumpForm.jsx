

import React from "react";

export default props => {
    return (
        <div>
            <div style={{ margin: "1.5rem" }}>
                <label htmlFor="jumpInput">Passo:  </label>
                <input type="number" value={props.jump} id="jumpInput" onChange={e => props.setJump(+e.target.value)} />
            </div>
        </div>
    )
}