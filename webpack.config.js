const path = require('path');
// 引入mini-css-extract-plugin處理css background-image
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入html-webpack-plugin自動處理編譯後index.html檔案
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 每次編譯，清除編譯後資料夾
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.build.js'
  },
  // 在source中方便觀看
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 讓browser自動刷新
    inline: true,
    contentBase: './dist',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // 設定css編譯後抓取的公共路徑位置(ex:background-image屬性)
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            // 編譯後的圖片檔名及路徑位置
            options: {
              name: 'image/[name].[ext]',
              limit: 8000,
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 編譯後css檔案位置及路徑
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      title: 'react webpack',
      // 抓取對應位置的html模板(處理ReactDOM的進入點)
      template: './template.html'
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      // import時可以用＠代替 ../src
      '@': path.resolve(__dirname, '/src')
    },
    extensions: ['.js', '.jsx']
  }
}