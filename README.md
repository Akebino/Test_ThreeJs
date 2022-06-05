# Three.js　3Dモデル表示テスト

### Typescript, Three.jsを使用して以下のテストを記述しております
 - 3Dモデルの表示テスト
 - 3Dモデルをドラッグ時に平行移動させるテスト

### 環境構築手順書

- **※node.js環境がある場合は、こちらの手順は省略できます**<br>
DockerEngineをインストールしたコンソール環境(wsl2等)にて<br>
dockerフォルダをカレントディレクトリにした状態で以下のコマンドを叩く<br>
`docker-compose up -d --build`
- `node install ~ `コマンドでThree.jsを含めた各種モジュールをインストール<br>
モジュールの詳細は app/package.json > dependencies, devDependencies 項目を参照してください

- `npm run build` コマンドで app/distフォルダにテストコードをビルド<br>

- **※既存のWebServer, S3を使用する場合は、distフォルダを環境に応じて配置してください**<br>
ビルド後の確認方法等は以下のツールを使用しました<br>
https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=ja