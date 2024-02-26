# 変数の上書き方法
## 1. 環境変数を使った上書き
- ソースコード（main.tf）
  ```hcl
  variable "message" {
    type = string
    default = "nothing"
  }
  ```
- 環境変数定義、ビルド実行
  ```bash
  export TF_VAR_message="Hello World !"
  terraform apply
  ```

- 使い分け
  - 事項ログ残らない（tfstateには場合により出力される）
  - 鍵情報（ファイルとして残したくないもの）
  - 環境依存情報（dec,stg）
  - 運用管理サーバーで作業するような厳格な場合

## 2. 変数ファイルを使った上書き
- ソースコード（main.tf）
  ```hcl
  variable "message" {
    type = string
    default = "nothing"
  }
  ```
- 変数ファイル（terraform.tfvars）
  ```hcl
  message = "Hello World !"
  ```
- ビルド実行
  ```bash
  terraform apply
  ```
- 使い分け
  - git管理できる　＝　構成管理として残せる
  - ロジック（プロビジョン手続）とデータ（変数）は切り離す
  => git管理した時に変更箇所がわかりやすくなる

## 3. コマンドを使った上書き
- ソースコード（main.tf）
  ```hcl
  variable "message" {
    type = string
    default = "nothing"
  }
  ```
- 変数を指定したコマンド実行
  ```bash　
  terraform apply -var message="Hello World !"
  ```
- 使い分け
  - 実行ログに残る
  - テストで部分的に変更したい
  - デバッグで一部変更したい
  - 一時的な利用