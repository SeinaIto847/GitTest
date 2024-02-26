# Git Flow

## 新しいリポジトリ作成（プロジェクトみたいなもの）
1. Gitのコンソール開く
2. 右上（プロフィールの左横）の＋マーク
![+マーク](./img/1+マーク.png)
3. New Repository
![NewRepository](./img/2createnewrepository.png)

## git cloneする
1. ローカルで管理するディレクトリを作成する
   ```sh
   cd Document/study
   mkdir git
   cd git
   ```
2. リモートのリポジトリをクローンする
   ```sh
   git clone https://github.com/SeinaIto847/GitTest.git
   ```
   ![URL発行](./img/3url発行.png)
   
## ブランチ作成
1. リモートでブランチ作成
2. `git getch origin <取り込むブランチ>`
3. 確認`git branch -r`
4. 取り込んだブランチに切り替え`git checkout <取り込んだブランチ>`