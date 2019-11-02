import React from 'react'
import './App.css'

import { animateScroll as scroll } from 'react-scroll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import ButtonGeneral from './Components/Button/Button'
import NavComponent from './Components/navComponent/NavComponent'
import Footer from './Components/Footer/Footer'
import Form from './Components/form/Form'
import Login from './Components/AdminPage/Login/loginUser'
import AdminPage from './Components/AdminPage/AdminPage'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/data')
      .then(response => response.json())
      .then(console.log)
  }

  handlerClick = () => {}
  toScrollup = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/admin">
              <Login />
            </Route>

            <Route exact path="/user/form">
              <Form />
            </Route>

            <Route exact path="/admin/content">
              <AdminPage />
            </Route>

            <Route>
              <NavComponent toScrollup={this.toScrollup} />
              <Hero heroMainImage={heroImage} />
              <div>
                <ButtonGeneral
                  type="button"
                  nameBtn="Inscribete"
                  callback={this.handlerClick}
                />
                <ButtonGeneral
                  type="button"
                  nameBtn="Mas informacion"
                  callback={this.handlerClick}
                />
                <ButtonGeneral
                  type="button"
                  nameBtn="Agendar"
                  callback={this.handlerClick}
                />
                <ButtonGeneral
                  type="button"
                  nameBtn="Agendar cualquier cosa"
                  callback={this.handlerClick}
                />
              </div>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
