import React from "react";

class SiblingComponentClass extends React.Component {

    constructor() {
        super();
        this.state = {text: `Начальный тест`}
    }

    changeText = () => {
        this.setState(() => ({ text: `Классовая компонента` })); // для изменения 
        //this.setState((state) => ({ text: state.text +` `+`Классовая компонента` })); // с привязкой к предыдущему значению
    }


    render() {
        return(
            <div>
            <p>Текущий текст: {this.state.text}</p>
            <button onClick={this.changeText}>Изменить текст</button>
        </div>
        )
    }
}

export default SiblingComponentClass;