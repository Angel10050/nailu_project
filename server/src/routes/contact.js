'use strict'

const controller = require('../controllers/contact')
const { getCustomers } = require('../libs/query')

function initContact(app) {
  app.post('/api/customer', controller.contact)
  app.get('/api/customer', (req, res) => {
    getCustomers().then(datas => {
      const data = datas.filter(data => (Date.parse(data.date) - Date.now()) > -1369960506) 
      res.json({
        data
      })
    })
    .catch(err => {
      return res.status(400).json({ message: 'Error al obtener los datos' })
    })
  })

  return app
}

module.exports = initContact
