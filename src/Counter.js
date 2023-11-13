import React from "react";
class Compteur extends React.Component {
    state = {
        compteur: 0
    }
    handleClick= () => {
        this.setState({compteur : this.state.compteur+1})
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>Click me </button>
                <span>{this.state.compteur}</span>
            </>
        );
    }
}
export default Compteur;
