import React from 'react'

import '../Footer/Style.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h1>Contactos</h1>
        <div className="contactos">
          <ul className="social-icon">
            <li>
              <a>
                <span className="fa fa-whatsapp" aria-hidden="true"></span>{' '}
                <strong>+ 57 314 8169284</strong>{' '}
              </a>
            </li>
            <li>
              <a>
                <span className="fa fa-envelope" aria-hidden="true"></span>{' '}
                <strong>lida11jaramillo@hotmail.com</strong>{' '}
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Nailu-130735667644830/">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>{' '}
                <strong>@nailu</strong>{' '}
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nailu511/">
                <i className="fa fa-instagram" aria-hidden="true"></i>{' '}
                <strong>@nailu511</strong>{' '}
              </a>
            </li>
            <p>&copy;Nailu_Project Todos los derechos reservados 2019.</p>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
