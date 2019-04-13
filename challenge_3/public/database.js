var mysql = require('mysql');

dbConnection = mysql.createConnection({
    user: 'root',
    password: 'rootPriya1211',
    database: 'checkout'
});

dbConnection.connect();

module.exports.dbConnection = dbConnection;