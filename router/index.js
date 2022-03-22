var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let {
  findAllAirplane,
  findOneAirplane,
  updateOneAirplane,
  findcheckin,
  findluggage,
  findOneWorker
} = require('../service/mysqlService')


router.get('/', function (req, res, next) {
  req.send('this is test')
});
//值机
router.get('/checkin', async function (req, res, next) {
  res.send(await findcheckin())
})
//行李
router.get('/luggage', async function (req, res, next) {
  res.send(await findluggage())
})


//获取全部的airplane
router.get('/air', async function (req, res, next) {
  res.send(await findAllAirplane())
})


//根据航班号获取单个的airplane

router.get('/air/:fno', async function (req, res, next) {
  res.send(await findOneAirplane(req.params.fno))
})


//查询员工表中有无对应id和password

router.get('/login', async function (req, res, next) {
  res.send(await findOneWorker(req.params.account, req.params.password))
})


//修改航班信息讲修改后的航班信息传递过来
router.post('/air', async function (req, res, next) {
  req.body = JSON.parse(JSON.stringify(req.body))
  console.log(req.body);
  res.send(await updateOneAirplane(req.body))
})
module.exports = router;