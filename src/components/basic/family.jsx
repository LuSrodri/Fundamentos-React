import React from "react";

import MemberFamily from "./memberFamily";

export default props =>
{
    return (
        <div>
            <MemberFamily name="Pedro" lastName={props.lastName}></MemberFamily>
            <MemberFamily name="Ricardo" lastName={props.lastName}></MemberFamily>
            <MemberFamily name="Cleide" lastName={props.lastName}></MemberFamily>
        </div>
    )
}