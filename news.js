const { route } = require('./test')

const Mock = require('mockjs'),
  express = require('express'),
  router = express.Router(),
  Random = Mock.Random

router.use('/list', function (req, res, next) {
  let data = []
  let count = 0
  console.log('请求', Random.ctitle())
  count++
  for (let i = 0; i < 30; i++) {
    data[i] = Mock.mock({
      'author_name|1': [Random.cname()],
      'category|1': ['头条', '社会', '国内', '国际', '娱乐', '体育', '军事', '科技', '财经', '时尚'],
      date: Random.datetime(),
      title: Random.ctitle(),
      url: Random.url(),
      uniquekey: Random.guid(),
      //   thumbnail_pic_s: 'https://dfzximg02.dftoutiao.com/news/20210215/20210215152434_20b988a53a4075f06ba036e2df6ef58f_0_mwpm_03201609.jpeg',
      //   thumbnail_pic_s02: 'https://dfzximg02.dftoutiao.com/news/20210215/20210215152434_20b988a53a4075f06ba036e2df6ef58f_1_mwpm_03201609.jpeg',
      //   thumbnail_pic_s03: 'https://dfzximg02.dftoutiao.com/news/20210215/20210215152434_20b988a53a4075f06ba036e2df6ef58f_2_mwpm_03201609.jpeg',
      thumbnail_pic_s: Random.image('200x100', Random.color()),
      thumbnail_pic_s02: Random.image('200x100', Random.color()),
      thumbnail_pic_s03: Random.image('200x100', Random.color()),
    })
  }
  res.send({
    result: {
      data,
      state: 'ok',
    },
  })
})
module.exports = router
