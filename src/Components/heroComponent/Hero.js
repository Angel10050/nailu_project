import React from "react"
import './Hero.css'

function Hero(props){
    return(
        <div id="home">
        <img className='heroMainImage'
         src={props.heroMainImage}
         alt='Nail_Salon'
         
          />
          </div>
    )
}

export default Hero