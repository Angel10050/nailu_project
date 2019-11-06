import React from 'react'
import './App.css'

import { animateScroll as scroll } from 'react-scroll'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Hero from './Components/heroComponent/Hero'
import heroImage from './Components/gallery/img/10.jpeg'
import NavComponent from './Components/navComponent/NavComponent'
import BoxComponent from './Components/BoxComponent/BoxComponent'
import Footer from './Components/Footer/Footer'
import Form from './Components/form/Form'

import Gallery from './Components/gallery/Gallery'

import Login from './Components/AdminPage/Login/loginUser'
import AdminPage from './Components/AdminPage/AdminPage'

class App extends React.Component {
  componentDidMount() {
    fetch('/api/customer')
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
        imagenUrl: 'https://i.ibb.co/BB0vNRw/4.jpg',
        dia: '31',
        mes: 'Octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'https://i.ibb.co/V9M7KCL/3.jpg',
        dia: '31',
        mes: 'Octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'https://i.ibb.co/k29f4Ws/1.jpg',
        dia: '31',
        mes: 'Octubre',
        descripcion:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
      },
      {
        imagenUrl: 'https://i.ibb.co/t86mKW9/2.jpg',
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

            <Route path="/admin/content">
              <AdminPage />
            </Route>

            <Route exact path="/user/contactme">
              <Form />
            </Route>

            <Route>
              <NavComponent toScrollup={this.toScrollup} />
              <Hero heroMainImage={heroImage} />
              <BoxComponent datas={this.state.datas} />
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
