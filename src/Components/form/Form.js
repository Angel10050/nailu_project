import React,{ Component } from "react"

class Form extends Component {
    state={
        isInvalid : true,
        name : '',
        email : '',
        tlfNumber : null,
         errors : {
            name : '',
            email : '',
            tlfNumber : null,
        }
    }

    handleSubmit = ( event ) => {
        event.preventDefault()
        console.log(this.state);
    } 

    handleOnChange = ( event ) => {
        const { id, value} = event.target
        this.setState({
            [id] : value
        })
            this.fieldvalidation( id, value )
    }

    fieldvalidation = ( id, value ) => {
        const { errors } = this.state

        let error = value.length === 0
        ? 'this field is required'
        : ''

        if(id === 'email' && value.length > 0)
            error = this.emailValidation(value)
            ? ''
            : 'this field is not a E-mail'

        if(id === 'tlfNumber' && value.length > 0)
        error = isNaN(value)
        ? 'this field is not a Phone Number'
        : ''
        
        errors[id] = error
        this.setState({
            errors
        })

        if(errors.email.length || errors.name.length){
            this.setState({ isInvalid : true })
        }
        else{
            this.setState({ isInvalid : false })
        }

    } 

    emailValidation = ( value ) => {
        const regExp = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+(\.[^<>()*#$`~'"=+!¡¿?%^&{}/äáàëéèíìöóòúùñ|ºª·ç¨\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          );
      return regExp.test(value)
    }

    render () {
        
        return(
         <form onSubmit={this.handleSubmit}>

                 <label htmlFor='name'>Name:</label>
                 <input type='text' id='name' name='userName' onChange={this.handleOnChange}/>
             

                 <label htmlFor='email'>E-mail:</label>
                 <input type='email' id='email' name='userEmail' onChange={this.handleOnChange}/>
             
                 <label htmlFor='tlfNumber'>Phone Number:</label>
                 <input type="number" id='tlfNumber' name='userTlfNumber' onChange={this.handleOnChange}/>
             
             <button type="submit">Send your message</button>
         </form>   
     )
    }
}

export default Form