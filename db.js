const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: '59',
    host: 'localhost',
    port: 5432,
    database: 'todos_server'
})
module.exports = pool