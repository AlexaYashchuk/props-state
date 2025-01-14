import React, { useState } from "react";

class ChildComponentClass extends React.Component {

    render() {
        return (
            <div>
            <p>Привет, {this.props.name}! Текущий счетчик: {this.props.counter}</p>
        </div>
        )
    }

}

export default ChildComponentClass