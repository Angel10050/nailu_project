import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/pink-manicure-939836.jpg'
import NavComponent from './Components/navComponent/NavComponent'
import BoxComponent from './Components/BoxComponent/BoxComponent'
import Footer from './Components/Footer/Footer'
import Form from './Components/form/Form'

import Gallery from './Components/gallery/Gallery'

import Login from './Components/AdminPage/Login/loginUser'
import AdminPage from './Components/AdminPage/AdminPage'

class App extends React.Component {
  state = {
    trainings: []
  }
  componentDidMount() {
    fetch('/api/training')
      .then(response => response.json())
      .then(data => this.setState({ trainings: data.data }))
  }

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

            <Route path="/admin/content">
              <AdminPage />
            </Route>

            <Route exact path="/user/contactme">
              <Form />
            </Route>

            <Route>
              <NavComponent toScrollup={this.toScrollup} />
              <Hero heroMainImage={heroImage} />
              <BoxComponent trainings={this.state.trainings} />
              <Gallery />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
