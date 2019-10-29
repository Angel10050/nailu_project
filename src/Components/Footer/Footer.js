import React from 'react'

import '../Footer/Style.css'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="contacts">Contactos</h2>
      <div>
        <ul className="social-icon">
          <li>
            <a className="links">
              <span className="fa fa-whatsapp"></span>
              <strong> + 57 314 8169284</strong>
            </a>
          </li>
          <li>
            <a className="links">
              <span className="fa fa-envelope"></span>
              <strong> lida11jaramillo@hotmail.com</strong>
            </a>
          </li>
          <li>
            <a
              className="links"
              href="https://www.facebook.com/Nailu-130735667644830/"
            >
              <i className="fa fa-facebook-official"></i>
              <strong> @nailu</strong>
            </a>
          </li>
          <li>
            <a className="links" href="https://www.instagram.com/nailu511/">
              <i className="fa fa-instagram"></i>
              <strong> @nailu511</strong>
            </a>
          </li>
        </ul>
      </div>
      <p>&copy; DTW - Todos los derechos reservados 2019.</p>
    </footer>
  )
}

export default Footer
