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
モジュールの詳細は app/package.json ファイルの以下項目を参照
  - dependencies
  - devDependencies

- 環境構築後は以下の