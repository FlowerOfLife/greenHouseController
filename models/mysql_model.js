var Promise = require('es6-promise').Promise;

var mysqlClass = {
    mysqlQuery: function (myQuery) {
        var mysqlQueryP = new Promise(function (resolve, reject) {
            //
            var mysql = require('mysql');
            //create connection & auth
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'qwe123'
            });
            //connect
            connection.connect();
            //make query
            connection.query(myQuery, function (err, rows, fields) {
                if (err) throw err;
                resolve(rows)
            });

            connection.end();

        });

        return mysqlQueryP;
    },
    aaa: 'ssss'
}









module.exports = mysqlClass;


function showResult(result) {
    console.log(result)
}