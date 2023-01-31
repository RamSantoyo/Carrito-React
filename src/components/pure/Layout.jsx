import { Component } from "react";

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alingItems: 'center'
    }
}   

export default class Layout extends Component {
    render(){
        return(
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}