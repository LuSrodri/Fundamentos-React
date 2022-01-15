
import React from "react";
import If from './if'

export default props => {
    let user = props.user 
    return (
        <div>
            <If test={(user && props.user)}>
                <span> Welcome <strong>{props.user}</strong></span>
            </If>
            <If test={(!user && !props.user)}>
                <span> Welcome <strong>User</strong></span>
            </If>
        </div>
    )
}