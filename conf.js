
var mysql = require('mysql')

var connection = {
    connectionLimit : 10,
    host : '127.0.0.1',
    user : 'root',
    password : 'tester',
    database : 'test',
    debug : false
}

var pool = mysql.createPool(connection);

module.exports = pool;


