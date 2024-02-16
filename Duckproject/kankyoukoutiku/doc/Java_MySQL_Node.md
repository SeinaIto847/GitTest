## PCに直接インストール

ローカルPCにミドルウェアを直接インストールします。
インストールファイルは[ここ][localInstallerLink1]においてあります。
(Slackのgeneralの上部リンク「インストールファイル」からも飛べます)

### Java
1. [ここ][localInstallerLink1]から「OpenJDK17」のファイルをDL
1. DLしたzipを展開、展開先は任意（推奨：DLフォルダ）
1. ダウンロードしたファイルを「ダブルクリックで実行」
1. 「次へ」
    ![インストールウィザード][javaInstallPic1]
1. デフォルトのままで「次へ」
    ![カスタムセットアップ][javaInstallPic2]
1. 「インストール」
    ![インストール準備][javaInstallPic3]
1. インストール完了まで待機
1. 完了したら「完了」をクリック
    ![インストール完了][javaInstallPic4]
1. PowerShellを開き、下記コマンドをそれぞれ入力・バージョンが表示されるか確認
    ```powershell
    java -version
    ```
    ```powershell
    javac -version
    ```
    ![動確][javaInstallPic5]

### MySQL
1. [ここ][localInstallerLink1]から「mysql」のファイルをDL
1. DLしたzipを展開、展開先は任意（推奨：DLフォルダ）
1. ダウンロードしたファイルを「ダブルクリックで実行」
1. 「Server only」を選択し、「Next」
    ![セットアップタイプ][mysqlInstallPic1]
1. 必要なパッケージを確認し、「Execute」
    ![必要パッケージ確認][mysqlInstallPic2]
    - Microsoft Visual C++をインストールしろといわれるかもなので、言われたらインストール・完了
        ![C++インストール][mysqlInstallPic3]
1. 完了したら「Next」
1. 「Execute」（DLが始まる）
    ![ダウンロード実行][mysqlInstallPic4]
1. 完了したら「Next」
1. 「Execute」（Installが始まる）
    ![インストール実行][mysqlInstallPic5]
1. 完了したら「Next」
1. 「Next」（ここから環境設定）
    ![環境設定開始][mysqlInstallPic6]
1. デフォルト（下記画像と同様）のままで「Next」
    ![通信設定][mysqlInstallPic7]
1. 「Use Strong Password ..」を選択(デフォルト)し、「Next」をクリック
    ![認証設定][mysqlInstallPic8]
1. root(管理者)アカウントのパスワードを設定します。
   （覚えやすい）適切なものを入力してください。（基本使いません）
   そして、「Add User」をクリックし、以下の項目でユーザを追加
    - MySQL User Name: mysql
	- Host: (デフォルト)All Hosts(%)
	- User Role: (デフォルト)DB Admin
	- Password: SKpa$$w0rd1001!
    ![ユーザ追加設定][mysqlInstallPic9]
	追加できて以下のように設定できたら、「Next」
    ![認証設定][mysqlInstallPic10]
1. 以下デフォルトのままで、「Next」
    ![サービス設定][mysqlInstallPic11]
1. 以下デフォルトのままで、「Next」
    ![データ保護設定][mysqlInstallPic12]
1. 設定を確認し、「Execute」
    ![設定反映確認][mysqlInstallPic13]
1. すべてにチェックが入ったら「Finish」
    ![設定反映完了][mysqlInstallPic14]
1. 「Next」
1. 「Finish」
    ![インストール完了][mysqlInstallPic15]
1. パスを通します。検索ボックスから「環境変数を編集」を開く
    ![環境変数開く][mysqlInstallPic16]
1. ユーザ環境変数の「Path」を選択し、「編集」をクリック
    ![環境変数設定][mysqlInstallPic17]
1. MySQLがインストールされている位置を確認、おそらく以下と思われ
   `C:\Program Files\MySQL\MySQL Server 8.0`
1. 「環境変数名の編集」で新規をクリックし、上記のインストール位置の末尾に\binをつけた文字列を入力する
   上記で言えば`C:\Program Files\MySQL\MySQL Server 8.0\bin`
   入力できたら「OK」をクリック
    ![環境変数Path設定][mysqlInstallPic18]
1. 「環境変数」画面でも「OK」をクリック
1. PowerShellを開き、下記コマンドを入力
    ```powershell
    mysql -u mysql -p
    ```
    パスワードは`SKpa$$w0rd1001!`
1. 正常に`mysql>`が表示できたら完了、`exit`コマンドで抜け終了
    ![動確][mysqlInstallPic19]

### Node.js
1. [ここ][localInstallerLink1]から「node」のファイルをDL
1. DLしたzipを展開、展開先は任意（推奨：DLフォルダ）
1. ダウンロードしたファイルを「ダブルクリックで実行」
1. 「Next」
1. ライセンスを読んで同意にチェックし、「Next」をクリック
    ![ライセンス][nodejsInstallPic1]
1. デフォルトのままで「Next」をクリック
    ![インストールフォルダ][nodejsInstallPic2]
1. デフォルトのままで「Next」をクリック
    ![カスタムセットアップ][nodejsInstallPic3]
1. デフォルトのままで「Next」をクリック
    ![拡張セットアップ][nodejsInstallPic4]
1. 「Install」をクリック
    ![インストール確認][nodejsInstallPic5]
1. インストール完了まで待機
1. 完了したら「Finish」をクリック
    ![インストール完了][nodejsInstallPic6]
1. PowerShellを開き、下記コマンドをそれぞれ入力・バージョンが表示されるか確認
    ```powershell
    node -version
    ```
    ![動確][nodejsInstallPic7]


## 参考
https://sukkiri.jp/technologies/processors/jdk/temurin17-win_install.html

https://sukkiri.jp/technologies/databases/mysql/mysql_install.html

https://www.javadrive.jp/mysql/install/index2.html

https://qiita.com/echolimitless/items/83f8658cf855de04b9ce

https://adoptium.net/temurin/releases/?os=windows&arch=x64&package=jdk

https://dev.mysql.com/downloads/installer/

https://nodejs.org/ja


<!-- link -->
[localInstallerLink1]: https://drive.google.com/drive/folders/1l7kJBBIHQ5W0FyOWQB4dJIoMFBM-VTLO?usp=drive_link

[javaInstallPic1]: ./img/java/2023y09m30d_202336356.jpg
[javaInstallPic2]: ./img/java/2023y09m30d_202511325.jpg
[javaInstallPic3]: ./img/java/2023y09m30d_202516107.jpg
[javaInstallPic4]: ./img/java/2023y09m30d_202536778.jpg

[mysqlInstallPic1]: ./img/mysql/2023y09m30d_203142059.jpg
[mysqlInstallPic2]: ./img/mysql/2023y09m30d_203207847.jpg
[mysqlInstallPic3]: ./img/mysql/2023y09m30d_203356151.jpg
[mysqlInstallPic4]: ./img/mysql/2023y09m30d_203717480.jpg
[mysqlInstallPic5]: ./img/mysql/2023y09m30d_204015341.jpg
[mysqlInstallPic6]: ./img/mysql/2023y09m30d_204142515.jpg
[mysqlInstallPic7]: ./img/mysql/2023y09m30d_204431101.jpg
[mysqlInstallPic8]: ./img/mysql/2023y09m30d_204539477.jpg
[mysqlInstallPic9]: ./img/mysql/2023y09m30d_205237310.jpg
[mysqlInstallPic10]: ./img/mysql/2023y09m30d_205258978.jpg
[mysqlInstallPic11]: ./img/mysql/2023y09m30d_205545539.jpg
[mysqlInstallPic12]: ./img/mysql/2023y09m30d_205705418.jpg
[mysqlInstallPic13]: ./img/mysql/2023y09m30d_205852554.jpg
[mysqlInstallPic14]: ./img/mysql/2023y09m30d_205948066.jpg
[mysqlInstallPic15]: ./img/mysql/2023y09m30d_210121799.jpg
[mysqlInstallPic16]: ./img/mysql/辟｡鬘・6.jpg
[mysqlInstallPic17]: ./img/mysql/2023y09m30d_212821583.jpg
[mysqlInstallPic18]: ./img/mysql/2023y09m30d_213433915.jpg
[mysqlInstallPic19]: ./img/mysql/2023y09m30d_213858501.jpg

[nodejsInstallPic1]: ./img/nodejs/2023y09m30d_214221618.jpg
[nodejsInstallPic2]: ./img/nodejs/2023y09m30d_214232904.jpg
[nodejsInstallPic3]: ./img/nodejs/2023y09m30d_214304916.jpg
[nodejsInstallPic4]: ./img/nodejs/2023y09m30d_214325479.jpg
[nodejsInstallPic5]: ./img/nodejs/2023y09m30d_214339633.jpg
[nodejsInstallPic6]: ./img/nodejs/2023y09m30d_214357087.jpg
[nodejsInstallPic7]: ./img/nodejs/2023y09m30d_214612322.jpg
