import { Component } from "react";

const styles = {
    boton: {
        background: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textalign: 'center',
        textdecoration: 'none',
        display: 'inline-block',
        fontsize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    }
}

export default class Boton extends Component {    
    render(){
        const { ...props } = this.props;
        return(
            <button style={styles.boton} {...props} />
        )
    }
}

