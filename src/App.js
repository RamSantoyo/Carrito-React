import { Component } from 'react';
import Productos from './components/pure/Productos.jsx';
import Layout from './components/pure/Layout.jsx';
import Title from './components/pure/Title.jsx';
import Navegacion from './components/pure/Navegation.jsx';
import './App.css';

class App extends Component {
  state = {
    Productos: [
      {id: 1, nombre: 'Camisa ReactJS', precio: 30, imagen: '/img/1.jpg'},
      {id: 2, nombre: 'Camisa VueJS', precio: 40, imagen: '/img/2.jpg'},
      {id: 3, nombre: 'Camisa NodeJS', precio: 60, imagen: '/img/3.jpg'},
      {id: 4, nombre: 'Camisa Angular', precio: 80, imagen: '/img/4.jpg'},
    ],
    ArregloCarro: [],

    carrovisible: false
  }

  agregando = (argumentos) => {
    //BUSCAR SI EL PRODUCTO YA EXISTE EN EL CARRITO CON FILTER
    const existe = this.state.ArregloCarro.filter((producto) => producto.id === argumentos.id)
    if(existe.length === 0){
    this.setState({
      ArregloCarro: [...this.state.ArregloCarro.concat({
        ...argumentos,
        cantidad: 1
      })],
    })
  }else{
    this.setState({
      ArregloCarro: this.state.ArregloCarro.map((producto) => {
        if(producto.id === argumentos.id){
          producto.cantidad = producto.cantidad + 1
        }
        return producto
      })
    })
  }
}

mostrarCarro = () => {
if(!this.state.ArregloCarro.length){
  return
}

  this.setState({
    carrovisible: !this.state.carrovisible
  })
}

  render(){
    const cantidad = this.state.ArregloCarro.reduce((total, producto) => total + producto.cantidad, 0)
    return(      
      <div className="App">
        <Navegacion 
        carrito={cantidad} 
        detalles={this.state.ArregloCarro} 
        mostrarCarro={this.mostrarCarro} 
        carrovisible={this.state.carrovisible} />
        <Title texto="Tienda Virtual" />
        <Layout>          
          <Productos 
            Productos={this.state.Productos}
            agregarAlcarro={(argumentos) => this.agregando(argumentos)}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
