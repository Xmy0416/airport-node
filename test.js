var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '445344742',
    database: 'airport'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting:' + err.stack)
    }
    console.log('connected as id ' + connection.threadId);
})

let data =connection.query('SELECT * FROM airplane', function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is:', results);
    
});
connection.end();
console.log(data);