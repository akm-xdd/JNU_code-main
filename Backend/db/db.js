
const { Client } = require('pg')
 
const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'covid',
  password: 'password',
})

module.exports = db