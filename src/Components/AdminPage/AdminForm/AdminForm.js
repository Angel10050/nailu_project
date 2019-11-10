import React, {Component} from 'react'
import '../AdminForm/adminFormStyle.css'
import Button from '../../Button/Button'

class AdminForm extends Component{
    state={
        error : null,
        eventData : {
            day : '',
            month : '',
            description : '', 
            image : ''
        }
}

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('api/trainings',{
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(this.state.eventData)
        })
        .then(response => {
            this.handleErros(response.ok )
            return response.json()
        })
        .catch(err => alert(err))
    }

     handleErros = (validation) => {
        if(validation){
          this.setState({error : !validation})
        }else{
          this.setState({error : true})
        }
    } 

    handleChange = (event) => {
        const {name, value} = event.target
         this.setState(prevState => ({
             eventData : {
                ...prevState.eventData,
                    [name]:value
                }
            })
         )      
    }
    render(){
        return(
            <>
                <div className='formContainerMain'>
                    <form className='adminForm' onSubmit={this.handleSubmit} method='post'>

                        <div className='formEventDate'>
                            <div>
                                <label htmlFor='day' className='adminLabel'>Dia del evento:</label>
                                <input value={this.state.day} type='number' name='day' id='day' className='adminInput inputDay' onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor='month' className='adminLabel'>Mes del evento:</label>
                                <input value={this.state.month} type='text' list='months' name='month' id='month' className='adminInput' onChange={this.handleChange} />
                                    <datalist id='months'>
                                        <option value='Enero' />
                                        <option value='Febrero' />
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
                                <textarea value={this.state.description} name='description' id='description' className='adminInput textarea' onChange={this.handleChange}/>

                                <label htmlFor='image' className='adminLabel labelButton'>Elige una imagen:</label> 
                                <input value={this.state.image} type='file' name='image' id='image' className='adminInput' onChange={this.handleChange} />

                        </div>

                        <Button type={'submit'} nameBtn={'Confirmar'} className='adminButtonForm'/>    

                    </form> 
                    {
                        this.state.error ? <p className='errorMensage'>Error en los datos intentalo nuevamente</p> :
                        this.state.error === false ? <p className='errorMensage'>Envio exitoso</p> : '' 
                   } 
                </div>   
            </>
        )
    }
}

export default AdminForm