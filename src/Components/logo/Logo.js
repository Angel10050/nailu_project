import React, {Component} from 'react';
import { animateScroll as scroll } from 'react-scroll'
import logo from './Logo-Nailu-Amarillo.png'

class Logo extends Component {

    toScrollup = () => {
        scroll.scrollToTop()
    }
    render(){
        return(
            <>
            <img className='imgLogo' src={logo} alt='NaiyLogo' onClick={this.toScrollup}></img>
            </>
        )
    }
} 

export default Logo