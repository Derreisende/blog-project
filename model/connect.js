// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 连接数据库
  //数据库连接
  mongoose.connect('mongodb://Jay:123456@localhost:27017/blog?authSource=admin',
  {useNewUrlParser: true,useUnifiedTopology: true}) //playground为数据库名字
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log('数据库连接失败',err));
 