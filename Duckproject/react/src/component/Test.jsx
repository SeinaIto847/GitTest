import React from 'react';

const Test = ({ name, greeting = "こんにちは" }) => {
    return (
        <div>
            <h1>
                Hello, {name}, {greeting}
            </h1>
            <p>
                こんにちは、リアクトさん。
                あなたは１ファイル１コンポーネント
                ファイル名=コンポーネント名
            </p>
            <p>
                コンポーネントの一つの単位は何？
                →ボタンとか画面に表示する部品・もしくは変更したい対象単位。
            </p>
            <form action="#" method="get">
                <input type="text" name="code" id="code" />
                <input type="button" value={'送信'} />
            </form>
        </div>
    );
};

export default Test;
// 名前なしエクスポート