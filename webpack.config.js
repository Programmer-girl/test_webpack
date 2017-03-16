// 这个文件webpack.config.js为默认配置
// 可以用--config指定为其他文件
// 
var htmlWebpackPlugin = require('html-webpack-plugin');
//commont.js的写法
//如何使用pligin
module.exports = {
    // entry: './src/script/main.js',//打包入口
  //   entry 打包入口指示
		// 3种输入方式
		// 一、指定一个string，指定一个入口文件,所有的依赖在这一个入口文件指定
		// entry: './src/script/main.js'
		// 二、指定一个数组，解决两个平行的不相依赖，却想打包在一起的文件
		// entry: ['./src/script/main.js','./src/script/a.js'],
		// 三、给entry传一个对象，对象内容分为k和value
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
	},
    output: {
        path: './dist',//打包好的文件地址----------链接下面的根目录plugins的templete的地址
        filename: 'js/[name]-[chunkhash].js'//打包以后的文件名,不要再这里指定绝对路径
   	//      output  常用属性 filename path
   	//      filename-------链接其他的地址./dist/js/[name]-[chunkhash].js
		// filename：不要在这里指定绝对路径
		// 使用占位符 ，使得入口文件打包不相互依赖
		// [name]:chunk 的name，指的是entry的k值
		// [hash]：chunk的哈希值  版本号 （文件不变 哈希不变）
		// [chunkhash]：chunk自己的哈希值
		// 
		// 简而言之，规律定义你的打包名称
		// filename: '[name]-[hash].js'
		// 打包的名字为a-87364nk15465kln45
		// 
	},
  	//	打包后放在哪
  	plugins: [
  		new htmlWebpackPlugin({
  	
  			template: 'index.html',//连接入口文件，不影响出口文件名称
  			filename:'index.html',//出口文件定义名称
  			inject: false,//指定脚本文件放在head还是body里
  			title: 'webpack is good',//替换标题-----连接index.html<%= htmlWebpackPlugin.options.title %>
  		  date: new Date()
  		})
  	]
  	// devtool: 'source-map',//console 文件的指向 'eval-source-map'指向更清晰
  	//提高通过添加浏览器调试工具的元信息,源信息最详细的提升开发速度
  	//
    // watch: true//进行监听，所依赖文件改变自动更新
} 