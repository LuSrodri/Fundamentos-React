

import React from "react";

import './count.css'

import Display from "./display";
import Buttons from "./buttons";
import JumpForm from "./jumpForm";

export default class count extends React.Component {

    state = {
        number: this.props.startNumber || 0,
        jump: this.props.startJump || 1,
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.jump
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.jump
        })
    }

    setJump = (newValue) => {
        this.setState({
            jump: newValue,
        })
    }

    render() {
        return (
            <div className="count">
                <h2>Count</h2>
                <Display number={this.state.number}></Display>
                <JumpForm jump={this.state.jump} setJump={this.setJump}></JumpForm>
                <Buttons increment={this.increment} decrement={this.decrement}></Buttons>
            </div>
        )
    }
}