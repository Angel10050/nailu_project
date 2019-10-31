import React from 'react'
import AdminForm from '../AdminForm/AdminForm'

const AdminMain = ({eventNumber, img}) => {
    return(
        <section className='adminSection'>
           
            <h5>actualiza tus eventos mas proximos</h5>
            <p>{eventNumber}</p>
        
        <img className='ImgEventOne' src={img} alt='primer evento' />

            <AdminForm />

        </section>
    )
}
export default AdminMain