import React from 'react'
import ButtonGeneral from '../../Components/Button/Button'
import {Link} from "react-router-dom"

const Route = ({to, className, name}) =>{
    return(
        <Link to={to} className={className}>
             <ButtonGeneral type="button" nameBtn={name} /> 
        </Link>
    )
}
export default Route