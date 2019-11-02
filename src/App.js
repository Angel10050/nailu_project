import React from 'react'
import './App.css'

import { animateScroll as scroll } from 'react-scroll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/heroComponent/hands-1751637_1280.jpg'
import ButtonGeneral from './Components/Button/Button'
import NavComponent from './Components/navComponent/NavComponent'
import BoxComponent from './Components/BoxComponent/BoxComponent'
import Footer from './Components/Footer/Footer'
import Form from './Components/form/Form'
import Login from './Components/adminPage/Login/loginUser'
import { ListGroupItem } from 'react-bootstrap'

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

  state = {
    datas: [
      {
        imagenUrl: 'http://lorempixel.com/300/200',
        dia: '25',
        mes: 'octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'http://lorempixel.com/300/200',
        dia: '31',
        mes: 'octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'http://lorempixel.com/300/200',
        dia: '31',
        mes: 'octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'http://lorempixel.com/300/200',
        dia: '31',
        mes: 'octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      }
    ]
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

            <Route>
              <NavComponent toScrollup={this.toScrollup} />
              <Hero heroMainImage={heroImage} />
              <BoxComponent datas={this.state.datas} />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
