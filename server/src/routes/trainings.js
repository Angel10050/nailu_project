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
    const form = JSON.parse(JSON.stringify(req.body));
    console.log(form);
    const valid = validateData(['day', 'mount', 'description'], form);

    if (!valid) {
      return res.status(400).json({ message: 'los datos no son validos' });
    }
    cloudinary.uploader.upload(req.file.path, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
      }
      console.log(result);

      // guardar en db

      const { day, mount, description } = form;
      const image = result.url;
      connection.query(
        `INSERT INTO trainings (day, mount, description, image) VALUES ('${day}', '${mount}', '${description}', '${image}');`,
        (err, data) => {
          if (err) {
            console.log(err);
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
        console.log(err);
        return res.status(500).json({ message: 'Error interno del servidor' });
      });
  });
}

module.exports = trainings;
