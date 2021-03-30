const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) //body-parser 解析json格式数据
app.use(
  bodyParser.urlencoded({
    //此项必须在 bodyParser.json 下面,为参数编码
    extended: true,
  })
)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.get('/', function (req, res) {
  res.send('hello world')
})

router.use('/test', require('./test'))
router.use('/test2', require('./test2'))
router.use('/news', require('./news'))

app.use('/api', router)

app.listen(3002)
