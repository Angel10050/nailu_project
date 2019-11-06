import React from 'react'
import {Link} from "react-router-dom"

const Route = ({to, className, button}) =>{
    return(
        <Link to={to} className={className}>{button}</Link>
    )
}

export default Route