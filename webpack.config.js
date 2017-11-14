//webpack配置文件
var webpack = require("webpack");
var path = require("path")
module.exports = {
	devtool: 'source-map', //调试配置，生成source maps
	//入口 导入文件
	entry: './index.js',
	//出口 导出文件
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	//以下是服务环境配置
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
	//loader就是为了处理非JS类型的文件
	module: {
		rules: [{
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.html$/,
			use: 'html-loader'
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}, {
			test: /\.(png|jpg|gif)$/,
			use: 'url-loader'
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.vue$/,
			use: 'vue-loader'
		}, {
			test: /\.scss$/,
			use: 'sass-loader'
		}, {
			test: /\.ejs$/,
			use: 'ejs-loader'
		}, {
			test: /\.jade$/,
			use: 'jade-loader'
		}, {
			test: /\.ts$/,
			use: 'ts-loader'
		},{
			test:/\.(woff|svg|eot|ttf)\??.*$/,
			loader:'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]',
		}]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
};