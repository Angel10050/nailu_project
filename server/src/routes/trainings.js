'use strict'

const fs = require('fs')
const multer = require('multer')
const moment = require('moment')

const { validateToken } = require('../middleware/index')
const upload = multer({ dest: '/tmp/uploads' })
const { connection } = require('../libs/query')
const { cloudinary } = require('../libs/query')
const { validateData } = require('../utils')
const { getTrainings } = require('../libs/query')

function trainings(app) {
  app.post('/api/training', validateToken, upload.single('image'), (req, res, next) => {
    const form = req.body
    
    const valid = validateData(['date', 'description'], form)

    if (!valid || !req.file) {
      return res.status(400).json({ message: 'los datos no son validos' })
    }
  
    cloudinary.uploader.upload(req.file.path, (err, result) => {
      if (err) {
        return res.status(500).send('Internal server error')
      }
      // guardar en db
      const { date, description } = form
      const image = result.url
      connection.query(
        `INSERT INTO trainings (date, description, image) VALUES ('${date}', '${description}', '${image}')`,
        (err, data) => {
          if (err) {
            return res.status(500).send('Error')
          }
          fs.unlink(req.file.path, (err, result) => {
            return res.send(result)
          })
          return res.status(201).json({ message: 'se guardo con exito' })
        }
      )
    })
  })

  app.get('/api/training', (req, res, next) => {
    getTrainings()
      .then(datas => {
        moment.locale('es')
        datas.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        datas = datas.slice(0,5)
        let data = datas.map(data => {
          return {
            date: data.date,
            day:  moment(data.date).format("DD"),
            month: moment(data.date).format("MMMM"),
            description: data.description,
            image: data.image
          }
        })

        res.json({
          data
        })
      })
      .catch(err => {
        return res.status(500).json({ message: 'Error interno del servidor' })
      })
  })
}

module.exports = trainings