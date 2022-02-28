let MYSQL_CONF
// 开发环境下
MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'airport',
    port: 3306,
    dateStrings : true
}


module.exports = {
    MYSQL_CONF,
}