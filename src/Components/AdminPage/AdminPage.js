import React, {Component} from 'react'

import '../AdminPage/adminPageStyle.css'

import img1 from './srcImg/Evento1.png'
import img2 from './srcImg/Evento2.png'

import AdminMain from './mainAdminPage/AdminMain'
import Logo from '../logo/Logo'


class AdminPage extends Component{
    render(){
        return(
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
                    
                    <AdminMain img={img1} eventNumber={'Evento #1'}/>
                    <AdminMain img={img2} eventNumber={'Evento #2'} />
            </>

        )
    }
}

export default AdminPage