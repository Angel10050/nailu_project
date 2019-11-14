import React, { Component } from 'react'
import { withRouter } from 'react-router'

import '../UserList/Styles.css'

class UserList extends Component {
  state = {
    customers: [],
    isLoading: true,
    error: null
  }

  componentDidMount() {
    fetch('/api/customer', {
      method: 'Get',
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => response.json())
      .then(data =>{
        if(data.ok === false){
          this.props.history.push('/admin')
          localStorage.removeItem('token') 
        }
        
        this.setState({ customers: data.data })
    })
      .catch(error => {
        this.setState({ isLoading: false, error: error })
      })
  }
  render() {
    return (
      <div className="UserListContainer">
        <div className="table-responsive resposiveUser">
          <table className="table table-dark tableDarkLista">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Telefono</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers &&
                this.state.customers.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <th scope="row">{index}</th>
                      <td>{customer.name}</td>
                      <td>{customer.email}</td>
                      <td>{customer.phone}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default withRouter(UserList)