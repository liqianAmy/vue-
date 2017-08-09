# 前言 #
	几天前得知我们的项目要从angular环卫vuejs框架后，于是我花了一天时间写了一个webpack+vue的架构，包括本地服务搭建和路由配置等，结合vuex进行管理
# 安装 #
	1、先全局安装webpack
		$npm install webpack -g
		
	2、npm init
	3、配置package.json文件
		将babel/vue/vue相关等写在文件内
	4、npm run dev
		dev配置本地服务器；也可以直接打开文件
# 结构 #
	——dist          //直接放在服务器上可运行
	  ——js          //压缩文件
	  index.html   //文件本地打开可看效果
	——src
	  ——components  //组件
	    ——common    //公共组件
        home.vue
        login.vue
      ——js
		app.vue    //主页面接口
		index.js   //入口
      ——router
		router.js  //路由配置
      ——store
		index.js   //vuex的store文件
      index.html
    package.json
    REDME.md
    webpack.config.js   //webpack配置文件
# 项目 #
	项目包括webpack+vue+router+vuex，适合初期构建一个模块化的vue框架项目
