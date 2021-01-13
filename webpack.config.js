const path = require('path');
// 引入mini-css-extract-plugin處理css background-image
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.build.js'
  },
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // 可以在 .babelrc檔案設定
          // options: {
          //   presets: [
          //     ['@babel/preset-react', { targets: "defaults" }]
          //   ]
          // }
        }
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
  plugins: [new MiniCssExtractPlugin({
    // 編譯後css檔案位置及路徑
    filename: 'css/main.css'
  })]
}