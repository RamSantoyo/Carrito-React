import { Component } from "react";
import Producto from "./Producto";

const styles = {
    productos: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridGap: '3rem',
            padding: '6rem'
        }
    }
export default class Productos extends Component {
    render(){
        const { Productos, agregarAlcarro } = this.props;
        return(
            <div style={styles.productos}>
            {Productos.map((producto) => (
                <Producto key={producto.id} producto={producto} agregarAlcarro={agregarAlcarro} />
            ))}
            </div>
        )
    }                
}
