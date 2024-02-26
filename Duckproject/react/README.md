# React について

## React とは

- Facebook 社が開発した UI（ユーザーインターフェース）ライブラリ
- UI を作るためのコンポーネントという概念が特徴的
  - コンポーネント = 見た目 + 機能
- コンポーネントを組み合わせて Web の画面を生成していく

React を JavaScript で記述する際は、基本的に下記の JSX を使う

## JSX について

- JavaScript の拡張言語（テンプレート言語ではない）
- HTML ライクな記述 + JavaScript の構文が使える
- コンパイル時に、JSX は最終的に React 要素を生成する
  - 下記でいうと、使う場合を使わない場合に変換して実行している

### JSX を使う場合と使わない場合の比較

下記で生成される画面は等価＝同じ結果となる。

- 使わない場合

```js
React.createElement("button", { className: "btn-blue" }, "click me!");
```

- 使う場合

```jsx
<button className={"btn-blue"}>Click me!</button>
```

→ 使う場合のほうが、HTML ライクで直感的。分かりやすく、読みやすい。

## JSX の基本的な文法

- React ライブラリを import する
  - `import React from 'react';`
- `return`文の中が JSX の構文。

## プロジェクトの作成

React には「プロジェクトの型」を作成してくれるツールがあります。
それが「`create-react-app`」です。具体的には、以下のようなコマンドを実行します。

```sh
npx create-react-app [プロジェクト名]
```

## React の実行

アプリケーションを動かすには、以下のコマンドを実行します。

```sh
npm start
```

なお、`start`したままで、コードを変更すると、
変更内容がすぐに反映されます。（ホットデプロイといいます）

## React のコンポーネントの概念

簡単に言うと、Spring でいう Java クラス（Controller）です。

React は画面を生成してくれるフレームワークです。
変更があったら、それを容易に変更できる強みがあります。
それを活かすのがコンポーネントの概念です。

例えば、画面には入力欄やボタンとかが色々あります。
それを「このときにはボタンを表示して..」「このときは入力欄を見えなくして..」としたいとき、
その部品ごとに、コードに分けておくことで、その制御（や保守）がしやすくなります。

## props

## export と import

## useState

## useEffect
