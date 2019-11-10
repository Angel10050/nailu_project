import React, { Component } from 'react'
import './adminPageStyle.css'
import AdminForm from './AdminForm/AdminForm'
// import AdminMain from './mainAdminPage/AdminMain'
import Logo from '../logo/Logo'


class AdminPage extends Component {
    render() {
        return (
            <div>
                <div className='topContent'>
                    <header className='adminHeader'>
                        <Logo />
                    </header>
                    <div className='admintitle'>
                        <h1 className="display-2">Bienvenido Administrador</h1>
                        <h3 className="display-4">Desde aqui puedes actualizar tu contenido</h3>
                    </div>
                </div>

                <section className='adminSection'>
                        
                        <h4 className="eventDescription">actualiza tus eventos mas proximos</h4>
                    
                            <img className='ImgEventOne' src={require('./AdminForm/nail.jpg')} alt='primer evento' />

                        <AdminForm />

                </section>

            </div>

        )
    }
}

export default AdminPage