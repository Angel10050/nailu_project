import React, { Component } from 'react'

import '../UserList/Styles.css'

class UserList extends Component {
  state = {
    customers: []
  }

  componentDidMount() {
    fetch('/api/customer')
      .then(response => response.json())
      .then(data => this.setState({ customers: data.data }))
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
              {this.state.customers.map((customer, index) => {
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
export default UserList
