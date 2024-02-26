## Dockerで環境構築
OSに仮想環境(コンテナ)を作成し、その上にミドルウェアを構築します。
コンテナを作成するベースにUnix/Linuxが必要です。
そのため、Windowsは追加でWSL(Windows Subsystem for Linux)をインストールする必要があります。
(MacやLinuxはDockerのみでよい)

### メリット・デメリット
メリット
- ローカル環境を汚さずにすむ
- 他人と環境を完全に統一できる
- 初期設定が楽

デメリット
- それなりのスペックが必要
- 習得に時間がかかる
- 理解していないと手段が目的になる ~~（過去の自分です）~~

## WSL2のインストール

### 前提（？）
- Win10の場合は下記がオフ（チェックなし）になっていること（要検証）
（下記変更反映は再起動が必要）
`Windowsの機能の有効化または無効化`の
    - `Windows Subsystem for Linux`
    - `Virtual Machine Platform`

※Win11は前提無しで普通にできた。Win10で上記オンでも普通にいけるかも。

### 手順
1. 「Windows PowerShell」を「管理者として実行」
    ![PowerShell管理者実行][wsl2InstallPic1]
1. 下記コマンドを実行
    ```powershell
    wsl --install
    ```
    ![コマンド実行][wsl2InstallPic2]
1. インストール完了まで待つ
1. 完了しても、まだ再起動せずに。
    ![インストール完了][wsl2InstallPic3]
1. （Win10）検索ボックスから`Windowsの機能の有効化または無効化`の下記項目ををオンにする（自動でオンになってるかも）
    - `Linux用Windowsサブシステム`
    - `仮想マシンプラットフォーム`

    ![Windowsの機能の有効化または無効化][wsl2InstallPic4]
    ![WSL2有効項目][wsl2InstallPic5]
1. PCを再起動する
1. 再起動後、自動でLinuxが立ち上がるので、そこでユーザ名とパスワードを設定する（数分かかります）
    - 設定するのはWindowsの中のLinuxのアカウントです
    - 覚えやすいものでなんでもいいです、Winと同じが覚えやすい？

    ![Linuxアカウント作成][wsl2InstallPic6]
    ↑ 作成し終わった状態
1. （Linuxを更新するため、）続けて下記コマンドを実行
    ```sh
    sudo apt update && sudu apt full-upgrade -y
    ```
    ※実行するときに上記で設定したパスワードを聞かれますので入力してください（文字として表示されませんが、ちゃんと打ててます）
    ![LinuxUpdate][wsl2InstallPic7]
1. PowerShellを開き、下記コマンドを入力・正常に動いているか確認
    ```powershell
    wsl -l -v
    ```
    ![動確][wsl2InstallPic8]


## Dockerのインストール

### 手順(Windows)
1. [ここ][localInstallerLink1]から「Docker」のファイルをDL
1. DLしたzipを展開、展開先は任意（推奨：DLフォルダ）
1. ダウンロードしたファイルを「ダブルクリックで実行」
1. チェックはお好みで「Ok」
    ![設定][dockerInstallPic1]
1. インストール完了まで待つ
1. 完了したら、「Close and log out」でサインアウトする
    ![インストール完了][dockerInstallPic2]
1. その後、サインインすると、規約が出てくるので読んで「Accept」
    ![規約][dockerInstallPic3]
1. サインインを促されるが、一番下の「Continue without signing in」で無視する
    ![サインイン][dockerInstallPic4]
1. 同じく「Skip」で無視
    ![職種][dockerInstallPic5]
1. この画面が出たら完了
    ![トップ画面][dockerInstallPic6]
1. PowerShellを開き、下記コマンドを入力・正常に動いているか確認
    ```powershell
    docker ps
    ```
    ![動確][dockerInstallPic7]

## 参考
https://chigusa-web.com/blog/wsl2-win11/

https://chigusa-web.com/blog/windows%E3%81%ABdocker%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%97%E3%81%A6python%E7%92%B0%E5%A2%83%E3%82%92%E6%A7%8B%E7%AF%89/



<!-- link -->
[localInstallerLink1]: https://drive.google.com/drive/folders/1l7kJBBIHQ5W0FyOWQB4dJIoMFBM-VTLO?usp=drive_link

[wsl2InstallPic1]: ./img/wsl2/a.jpg
[wsl2InstallPic2]: ./img/wsl2/2023y09m30d_184301180.jpg
[wsl2InstallPic3]: ./img/wsl2/2023y09m30d_190609349.jpg
[wsl2InstallPic4]: ./img/wsl2/辟｡鬘・.jpg
[wsl2InstallPic5]: ./img/wsl2/2023y09m30d_191002703.jpg
[wsl2InstallPic6]: ./img/wsl2/2023y09m30d_192221560.jpg
[wsl2InstallPic7]: ./img/wsl2/2023y09m30d_192947959.jpg
[wsl2InstallPic8]: ./img/wsl2/2023y09m30d_193529016.jpg

[dockerInstallPic1]: ./img/docker/2023y09m30d_195209907.jpg
[dockerInstallPic2]: ./img/docker/2023y09m30d_195634173.jpg
[dockerInstallPic3]: ./img/docker/2023y09m30d_195758231.jpg
[dockerInstallPic4]: ./img/docker/2023y09m30d_195950062.jpg
[dockerInstallPic5]: ./img/docker/2023y09m30d_200151562.jpg
[dockerInstallPic6]: ./img/docker/2023y09m30d_200510525.jpg
[dockerInstallPic7]: ./img/docker/2023y09m30d_200624491.jpg
