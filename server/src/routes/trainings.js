'use strict';

const fs = require('fs');
const multer = require('multer');

const upload = multer({ dest: '/tmp/uploads' });
const { connection } = require('../libs/query');
const { cloudinary } = require('../libs/query');
const { validateData } = require('../utils');
const { getTrainings } = require('../libs/query');

function trainings(app) {
  app.post('/api/training', upload.single('image'), (req, res, next) => {
    const form = req.body;
    const valid = validateData(['day', 'month', 'description'], form);

    if (!valid || !req.file) {
      return res.status(400).json({ message: 'los datos no son validos' });
    }
  
    cloudinary.uploader.upload(req.file.path, (err, result) => {
      if (err) {
        return res.status(500).send('Internal server error');
      }
     
      // guardar en db
      const { day, month, description } = form;
      const image = result.url;
      connection.query(
        `INSERT INTO trainings (day, month, description, image) VALUES ('${day}', '${month}', '${description}', '${image}');`,
        (err, data) => {
          if (err) {
            return res.status(500).send('Error');
          }
          fs.unlink(req.file.path, (err, result) => {
            return res.send(result);
          });
          return res.status(201).json({ message: 'se guardo con exito' });
        }
      );
    });
  });

  app.get('/api/training', (req, res, next) => {
    getTrainings()
      .then(data => {
        res.json({
          data
        });
      })
      .catch(err => {
        return res.status(500).json({ message: 'Error interno del servidor' });
      });
  });
}

module.exports = trainings;
