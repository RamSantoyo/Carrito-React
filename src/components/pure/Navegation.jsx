import { Component } from "react";
import Carro from "./Carro";
import Detalles from "./Detalles";

const style = {
    flex : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem",
    },
    logo: {
        width: '15%',
    },
    navegacion: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap : "2rem",
        fontSize: "1.3rem",       
    },
    boton: {
        backgroundColor: "black",
        color: "white",
        padding: ".9rem",
        borderRadius: "1rem",
        border: "none",
        fontSize: "1.3rem",
        cursor: "pointer",
    },
    pop: {
        position: "relative",
        right: "-3rem",
        marginTop: "2rem",
    }
};

export default class Navegation extends Component {
    render() {

        const { carrito, detalles, mostrarCarro, carrovisible} = this.props;
        return (
            <div style={style.flex}>
                <div style={style.logo}>
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"/>
                    </a>                    
                </div>  
                <nav style={style.navegacion}>
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                        Documentation
                    </a>
                    <a className="navbar-item" href="https://bulma.io/">
                        Tienda
                    </a>
                    <span style={style.pop}>
                        {
                            carrito > 0 && (
                                <Carro carrito={carrito} />
                            )
                        }
                    </span>
                    <button style={style.boton} onClick={mostrarCarro}>
                        Carrito
                    </button>
                    {
                        carrovisible === true ? <Detalles detalles={detalles} /> : null
                    }                                                   
                </nav>    
            </div>                
        )
    }
}
