const path = require('path');

module.exports = {
    mode: 'development',
    //devtool: "source-map",
    entry: './dev/src/page/index.ts',
    output: {
        path: `${__dirname}/dev/public`,
        filename: 'main.js'
    },

    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: ['ts-loader'],
        },
        {
          test:/\.(css|scss|sass)$/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use:['url-loader']
        }
      ],
    },
    resolve: {
      // 拡張子を配列で指定
      extensions: [
        '.ts', 
        '.js'
      ],
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      static: {
        directory: path.join(__dirname, "./dev/public"),
      },
      open: true,
      host: '0.0.0.0',
      port: 8081,
      hot: true,
      watchFiles: ['.dev/**'],
    }
  };