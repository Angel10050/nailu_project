import React, { Component } from 'react'

import './adminPageStyle.css'

import AdminForm from './AdminForm/AdminForm'

import img1 from './srcImg/Evento1.png'


// import AdminMain from './mainAdminPage/AdminMain'
import Logo from '../logo/Logo'


class AdminPage extends Component {
    render() {
        return (
            <>
                <div className='topContent'>
                    <header className='adminHeader'>
                        <Logo />
                    </header>
                    <div className='admintitle'>
                        <h1>Bienvenido Administrador</h1>
                        <h3>Desde aqui puedes actualizar tu contenido</h3>
                    </div>
                </div>

                <section className='adminSection'>
                        
                        <h5>actualiza tus eventos mas proximos</h5>
                    
                            <img className='ImgEventOne' src={img1} alt='primer evento' />

                        <AdminForm />

                </section>

            </>

        )
    }
}

export default AdminPage