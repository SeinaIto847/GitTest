// 名前なしインポート
// import Test from "./component/Test";
// // 名前ありインポート
// import { Test2, Test3, Test4 } from "./component/Test2";`

import { Test, Test2 } from "./component/index";

function App() {
  let name = "おがちゃんずリターンズ";
  return (
    <>
      <h1>テスト{name}</h1>
      <Test name="森ちゃん" />
      <Test name={name} />
      <Test />
      <Test2 name="test2" />
    </>
  );
}

// この書き方は「関数式」と呼ばれる書き方。
// 表現は違えど、上の関数とと効力はおなじ。
// const App2 = () => {
//   let name = "おがちゃんず";
//   return <h1>テスト{name}</h1>;
// };

export default App;
