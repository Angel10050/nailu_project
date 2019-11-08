'use strict'

function trainings(app) {
  app.get('/api/training', (req, res, next) => {
    return res.json({
      data: [
        {
          image: 'https://i.ibb.co/RQ85y2S/2019-11-04-at-9-31-48-PM4.jpg',
          day: '31',
          month: 'Octubre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
        },
        {
          imagenUrl: 'https://i.ibb.co/V9M7KCL/3.jpg',
          day: '31',
          month: 'Octubre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
        },
        {
          imagenUrl: 'https://i.ibb.co/k29f4Ws/1.jpg',
          day: '31',
          month: 'Octubre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
        },
        {
          imagenUrl: 'https://i.ibb.co/t86mKW9/2.jpg',
          day: '31',
          month: 'octubre',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quose.'
        }
      ]
    })
  })
}

module.exports = trainings
