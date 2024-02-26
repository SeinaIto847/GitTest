import { useState } from "react";

export default function Counter({ c, boolean }) {
    const [count, setCount] = useState(c);
    const [isRegister, setIsRegister] = useState(boolean);

    const countUp = () => {
        setTimeout(() => {
            // 今の状態に + 1 する
            setCount(count + 1);
        }, 1000);
    };

    const countDown = () => {
        setTimeout(() => {
            // 前の値に - 1 する
            setCount((pre) => pre - 1);
        }, 1000);
    };

    function changeFlg() {
        setIsRegister(pre => !pre);
    }

    const [name, setName] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };

    return (
        <>
            <p>現在のカウント：{count}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>

            <div>
                <button onClick={changeFlg}>{isRegister ? "更新" : "登録"}</button>
            </div>

            <textarea onChange={(event) => handleName(event)}></textarea>
            <p>{name}</p>
        </>
    );
};