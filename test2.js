const Mock = require('mockjs'),
  express = require('express'),
  router = express.Router(),
  Random = Mock.Random;

router.use('/systemwarn', function (req, res, next) {
  var data = Mock.mock({
    'list|20': [
      {
        'id|+1': 1,
        'serial_number|1-100': 1,
        'warn_number|1-100': 1,
        'warn_name|1': ['报警类型1', '报警类型2', '报警类型3'],
        'warn_level|1': ['紧急', '重要'],
        warn_detail: '环境IP:10.114.123.12,服务名称:XX',
        create_time: Random.datetime(),
        finish_time: Random.datetime(),
        image: '@url(http)',
        'contact|4': 'abc',
      },
    ],
  });
  res.send({
    meta: {
      message: 'success',
    },
    status: true,
    data: data.list,
  });
});
module.exports = router;
