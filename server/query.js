const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

const doQuery = query => client.query(query).then(({ rows = [] }) => rows)

const getCustomers = () => doQuery('SELECT * FROM customer')

module.exports = {
  getCustomers
};