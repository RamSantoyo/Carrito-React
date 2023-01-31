import { Component } from "react";

const style = {
    texto: {
        fontSize: "2rem",
        textAlign: "center",
        margin: "1rem",
    }
}

export default class Title extends Component {
    render(){
        const { texto } = this.props;
        return(
            <h1 style={style.texto}>{texto}</h1>
        )
    }
}