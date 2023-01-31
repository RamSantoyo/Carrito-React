import { Component } from "react";
import Boton from './Boton.jsx'

const styles = {
    producto: {
        padding: '2rem',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0 0 20px rgba(0,0,0,0.15)',
        '&:hover': {
            boxShadow: '0 0 20px rgba(0,0,0,0.25)'
        }
    },
    card: {
        backgroundcolor: '#fff',
        padding: '1rem',
        textalign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alingItems: 'center',
        justifyContent: 'center',
    },
    centrar: {
        textAlign: 'center'
    },
    Boton: {
        backgroundcolor: '#000',
        color: '#fff',
    }
}

export default class Producto extends Component {
    render(){
        const { producto, agregarAlcarro } = this.props;
        return(
            <div style={styles.producto}>
                <div style={styles.card}>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h3 style={styles.centrar}>{producto.nombre}</h3>
                    <p style={styles.centrar}>$ {producto.precio}</p>
                    <Boton onClick={() => agregarAlcarro(producto)}>Agregar</Boton>
                </div>
            </div>
        )
    }
}