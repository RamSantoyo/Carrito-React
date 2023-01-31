import { Component } from "react";

const style = {
    carrito: {
        width: "2rem",
        height: "2rem",
        backgroundColor: "#f00",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}
export default class Carro extends Component {
    render() {
        const { carrito } = this.props;
        return (
            <div style={style.carrito}>
                {carrito > 9 ? "9+" : carrito}
            </div> 
        )
    }
}