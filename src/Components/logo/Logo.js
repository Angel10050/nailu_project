import React from 'react';
import logo from './Logo-Nailu-Amarillo.png'
import '../../App.css'

function Logo (props) {
        return(
            <img className='imgLogo' src={logo} alt='NaiyLogo' onClick={props.onClick}></img>
    )
} 

export default Logo