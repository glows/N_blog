
1. models: 存放操作数据库的文件
2. public: 存放静态文件，如样式、图片等
3. routes: 存放路由文件
3. views: 存放模板文件
4. index.js: 程序主文件
6. package.json: 存储项目名、描述、作者、依赖等等信息

小提示：遵循了 MVC（模型(model)－视图(view)－控制器(controller/route)） 的开发模式。

## 安装依赖模块

运行以下命令安装所需模块：
```
npm i config-lite connect-flash connect-mongo ejs express express-formidable express-session marked moment mongolass objectid-to-timestamp sha1 winston express-winston --save
```

对应模块的用处：
express: web 框架
express-session: session 中间件
connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
connect-flash: 页面通知提示的中间件，基于 session 实现
ejs: 模板
express-formidable: 接收表单及文件的上传中间件
config-lite: 读取配置文件
marked: markdown 解析
moment: 时间格式化
mongolass: mongodb 驱动
objectid-to-timestamp: 根据 ObjectId 生成时间戳
sha1: sha1 加密，用于密码加密
winston: 日志
express-winston: 基于 winston 的用于 express 的日志中间件
后面会详细讲解这些模块的用处。

## 功能与路由设计
在开发博客之前，我们首先需要明确博客要实现哪些功能。由于本教程面向初学者，所以只实现了博客最基本的功能，其余的功能（如归档、标签、分页等等）读者可自行实现。+

功能及路由设计如下：
注册
注册页：GET /signup
注册（包含上传头像）：POST /signup
登录
登录页：GET /signin
登录：POST /signin
登出：GET /signout
查看文章
主页：GET /posts
个人主页：GET /posts?author=xxx
查看一篇文章（包含留言）：GET /posts/:postId
发表文章
发表文章页：GET /posts/create
发表文章：POST /posts
修改文章
修改文章页：GET /posts/:postId/edit
修改文章：POST /posts/:postId/edit
删除文章：GET /posts/:postId/remove
留言
创建留言：POST /posts/:postId/comment
删除留言：GET /posts/:postId/comment/:commentId/remove
由于我们博客页面是后端渲染的，所以只通过简单的 <a>(GET) 和 <form>(POST) 与后端进行交互，如果使用 jQuery 或者其他前端框架（如 angular、vue、react 等等）可通过 Ajax 与后端交互，则 api 的设计应尽量遵循 restful 风格。
restful
restful 是一种 api 的设计风格，提出了一组 api 的设计原则和约束条件。
如上面删除文章的路由设计：
GET /posts/:postId/remove
restful 风格的设计：
DELETE /post/:postId
可以看出，restful 风格的 api 更直观且优雅。
更多阅读：+

(http://www.ruanyifeng.com/blog/2011/09/restful)
http://www.ruanyifeng.com/blog/2014/05/restful_api.html
http://developer.51cto.com/art/200908/141825.htm
http://blog.jobbole.com/41233/


index---中间件---> 路由函数（传递render的参数）------->渲染页面(render)

###  index 入口文件

+ index 设置模板目录和模板引擎
+ 设置静态文件目录
+ index 加载// session中间件 //flash 中间件
+ index 调用封装好的路由函数
+  监听端口，启动程序
