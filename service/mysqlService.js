let {
    exec
} = require("../dao/mysqlDao")

//值机
module.exports.findcheckin = async function (){
    return exec('select * from checkin').then(rows => {
        return rows
    })
}
//行李
module.exports.findluggage = async function(){
    return exec('select * from luggage').then(rows => {
        return rows
    })
}


//查找所有的航班信息
module.exports.findAllAirplane = async function () {
    return exec('select * from airplane').then(rows => {
        return rows
    })
}


//查找单个航班信息以航班号为id
module.exports.findOneAirplane = async function (fno) {
    return exec(`select * from airplane where flightno='${fno}'`).then(rows => {
        return rows[0]
    })
}

module.exports.findOneWorker = async function (account,password) {
    return exec(`select * from worker where w_id='${account}' and w_password='${password}'`).then(rows => {
        return rows[0]
    })
}

//修改
module.exports.updateOneAirplane = async function (data) {
    let sql = ''
    for (let index in data) {
        if (index == "CheckinCounter") {
            sql += `, ${index} = ${data[index]}`
            continue
        }
        sql += `, ${index} = '${data[index]}'`

    }
    sql = sql.substr(1)
    return exec(`UPDATE airplane SET${sql} WHERE flightno = '${data.flightno}'`).then(res => {
        return exec('select * from airplane').then(rows => {
            return rows
        })
    })
}