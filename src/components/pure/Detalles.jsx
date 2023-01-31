import { Component } from "react";

const style = {
    detalles: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
    },
    contenedor_detalles: {
        position: "absolute",
        top: "7rem",
        right: "2rem",
        width: "30%",
        background: "#fff",
        boxShadow: '0 0 20px rgba(0,0,0,0.15)',
        '&:hover': {
            boxShadow: '0 0 20px rgba(0,0,0,0.25)'
        }
    },
    texto_tamaño: {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    }
} 

export default class Detalles extends Component {
    render() {
        const { detalles } = this.props;
        return (
            <div style={style.contenedor_detalles}>
                {
                 detalles.map((detalle, index) => {
                    return (
                            <div style={style.detalles} key={index}>
                                <img src={detalle.imagen} alt={detalle.nombre}/>
                                <p style={style.texto_tamaño}>{detalle.nombre}</p>
                                <p style={style.texto_tamaño}>$ {detalle.precio * detalle.cantidad}</p>
                                <p style={style.texto_tamaño}>Cantidad: {detalle.cantidad}</p>                                
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}