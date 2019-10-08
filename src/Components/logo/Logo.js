import React, {Component} from 'react';
import logo from './Logo-Nailu-Amarillo.png'

class Logo extends Component {
    render(){
        return(
            <img className='imgLogo' src={logo} alt='NaiyLogo' onClick={this.props.onClick}></img>
        )
    }
} 

export default Logo