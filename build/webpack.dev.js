var path = require('path')
var webpack = require('webpack')

// webpack-dev-server --content-base ./dev
//上述命令是在命令行中执行的,它将dev目录作为根目录.有一点需要注意的是:webpack-dev-server生成的包并没有放在你的真实目录中,而是放在了内存中.

// webpack 环境上下文是当前工作目录|，从当前工作目录去找entry；输出目录要是绝对路径
module.exports = {
  entry: './dev/index.js',
  output: {
    path: path.resolve(__dirname, './dev'),
    publicPath: '/dev/', // webpack-dev-server 根目录
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}