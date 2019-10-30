import React, {Component} from 'react'

import Logo from '../logo/Logo'
import '../AdminPage/adminPageStyle.css'

import img1 from './srcImg/Evento1.png'
import img2 from './srcImg/Evento2.png'

import AdminForm from './AdminForm/AdminForm'

import Form from '../form/Form'

class AdminPage extends Component{
   
    handleSubmit = (event) => {
        event.preventDefault()
     } 


    handleChange = (event) => {
        const {name, value} = event.target
         this.setState({
             firstEvent : {
                [name] : value
             },
         })
         console.log(this.state)
    }
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
                    
                <section className='adminSection'>
           
                        <h5>actualiza tus eventos mas proximos</h5>
                        <p>Evento #1</p>
                 
                    <img className='ImgEventOne' src={img2} alt='primer evento' />

                            <AdminForm />

                </section>


                <section className='adminSection'>

                        <h5>actualiza tus eventos mas proximos</h5>
                        <p>Evento #2</p>

                    <img className='ImgEventOne' src={img1} alt='primer evento' />

                        <AdminForm />

                </section>

                <Form />
            </>

        )
    }
}

export default AdminPage




























































































































































































































/* import React, {Component} from 'react'

import Logo from '../logo/Logo'
import '../AdminPage/adminPageStyle.css'

import img1 from './srcImg/Evento1.png'
import img2 from './srcImg/Evento2.png'

import Form from '../form/Form'

class AdminPage extends Component{
    state={
        firstEvent : {
            day : '',
            month : '',
            description : '',
            
        },
        secondEvent : {
            daySd : '',
            monthSd: '',
            descriptionSd : '',
          
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
     } 


    handleChange = (event) => {
        const {name, value} = event.target
         this.setState({
             firstEvent : {
                [name] : value
             },
         })
         console.log(this.state)
    }
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
                    
                <section className='adminSection'>
           
                        <h5>actualiza tus eventos mas proximos</h5>
                        <p>Evento #1</p>
                 
                    <img className='ImgEventOne' src={img2} alt='primer evento' />

                    <form className='adminForm' onSubmit={this.handleSubmit} method='post'>

                        <div className='formEventDate'>
                            <div>
                                <label htmlFor='day' className='adminLabel'>Dia del evento:</label>
                                <input value={this.state.firstEvent.day} type='number' name='day' id='day' className='adminInput inputDay' onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor='month' className='adminLabel'>Mes del evento:</label>
                                <input value={this.state.firstEvent.month} type='text' list='months' name='month' id='month' className='adminInput' onChange={this.handleChange} />
                                    <datalist id='months'>
                                        <option value='Enero' />
                                        <option value='Frebrero' />
                                        <option value='Marzo' />
                                        <option value='Abril' />
                                        <option value='Mayo' />
                                        <option value='Junio' />
                                        <option value='Julio' />
                                        <option value='Agosto' />
                                        <option value='Septiembre' />
                                        <option value='Octubre' />
                                        <option value='Noviembre' />
                                        <option value='Diciembre' />
                                    </datalist>
                            </div>
                        </div>

                        <div className='formEventContent'>
                            
                                <label htmlFor='description' className='adminLabel'>Describre el evento (Se breve):</label>
                                <textarea value={this.state.firstEvent.description} name='description' id='description' className='adminInput textarea' onChange={this.handleChange}/>
                                            
                                <label htmlFor='eventImage' className='adminLabel'>Carga una imagen para este evento:</label>
                                <input value={this.state.firstEvent.eventImage} type='file' name='eventImage' id='eventImage' className='adminInput' onChange={this.handleChange}/>
                        </div>

                    </form> 
                </section>


                <section className='adminSection'>

                        <h5>actualiza tus eventos mas proximos</h5>
                        <p>Evento #2</p>

                    <img className='ImgEventOne' src={img1} alt='primer evento' />

                    <form className='adminForm' onSubmit={this.handleSubmit} method='post'>

                        <div className='formEventDate'>
                            <div>
                                <label htmlFor='day' className='adminLabel'>Dia del evento:</label>
                                <input value={this.state.firstEvent.daySd} type='number' name='day' id='daySd' className='adminInput inputDay' onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor='month' className='adminLabel'>Mes del evento:</label>
                                <input value={this.state.secondEvent.monthSd} type='text' list='months' name='month' id='monthSd' className='adminInput' onChange={this.handleChange} />
                                    <datalist id='months'>
                                        <option value='Enero' />
                                        <option value='Frebrero' />
                                        <option value='Marzo' />
                                        <option value='Abril' />
                                        <option value='Mayo' />
                                        <option value='Junio' />
                                        <option value='Julio' />
                                        <option value='Agosto' />
                                        <option value='Septiembre' />
                                        <option value='Octubre' />
                                        <option value='Noviembre' />
                                        <option value='Diciembre' />
                                    </datalist>
                            </div>
                        </div>

                        <div className='formEventContent'>

                                <label htmlFor='description' className='adminLabel'>Describre el evento (Se breve):</label>
                                <textarea value={this.state.secondEvent.descriptionSd} name='description' id='descriptionSd' className='adminInput textarea' onChange={this.handleChange} />

                                <label htmlFor='eventImage' className='adminLabel'>Carga una imagen para este evento:</label>
                                <input value={this.state.secondEvent.eventImageSd} type='file' name='eventImage' id='eventImageSd' className='adminInput' onChange={this.handleChange} />
                        </div>

                    </form> 
                </section>

                <Form />
            </>

        )
    }
}

export default AdminPage */