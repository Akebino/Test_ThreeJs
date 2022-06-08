# Three.js　3Dモデル表示テスト

### Typescript, Three.jsを使用して以下のテストを記述しております
 - 3Dモデルの表示テスト
 - 3Dモデルをドラッグ時に平行移動させるテスト

### 環境構築手順書

- **※node.js環境がある場合は、こちらの手順は省略できます**<br>
DockerEngineをインストールしたコンソール環境(wsl2等)にて<br>
dockerフォルダをカレントディレクトリにした状態で以下のコマンドを叩く<br>
`docker-compose up --build`<br>

- コンソール上で下記が流れた際はURLにアクセスしてください<br>
　`<i> [webpack-dev-server] Loopback: URL`<br>
※DockerfileのENTRYPOINTにて `npm run watch` を実行しております

- app/dev/ 以下が変更された場合、ホットリロードが走るので<br>
ブラウザをつけた状態で開発可能です。