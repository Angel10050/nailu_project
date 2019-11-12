const { Client } = require('pg')
const cloudinary = require('cloudinary').v2
let moment = require('moment')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

client.connect()

const connection = client

const doQuery = query => client.query(query).then(({ rows = [] }) => rows)

const getCustomers = () =>
  doQuery(
    `SELECT * FROM customer WHERE date BETWEEN '${moment()
      .subtract(15, 'days')
      .format('YYYY-MM-DD')}' AND  '${moment().format(
        'YYYY-MM-DD'
      )}'`
  )
const getAdmin = () => doQuery('SELECT * FROM admin')
const getTrainings = () => doQuery(`SELECT * FROM trainings WHERE date BETWEEN '${moment().format(
  'YYYY-MM-DD'
)}' AND '${moment()
  .add(30, 'days')
  .format('YYYY-MM-DD')}'`)

module.exports = {
  getCustomers,
  getAdmin,
  connection,
  getTrainings,
  cloudinary
}
