import React from "react"
import './Hero.css'

function Hero(props){
    return(
        <img className='heroMainImage'
         src={props.heroMainImage}
         alt='Nail_Salon'
         id="home"
          ></img>
    )
}

export default Hero