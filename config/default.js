module.exports = {
    port: 3000,
    session: {
      secret: '内容分发系统',
      key: '内容分发系统',
      maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myblog'
  };