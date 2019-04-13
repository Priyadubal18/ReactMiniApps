var mysql = require('mysql');

dbConnection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'checkout'
});

dbConnection.connect();

module.exports.dbConnection = dbConnection;