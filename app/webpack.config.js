module.exports = {
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'production',
    watch: true,
    watchOptions: {
        poll: 1000, //毎秒変更を確認します
    },
    //devtool: "source-map",
    entry: './dev/src/page/index.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },

    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      // 拡張子を配列で指定
      extensions: [
        '.ts', 
        '.js'
      ],
    },
  };