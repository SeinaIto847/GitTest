import React from "react";
import { Counter } from "./hooks";

/**
 * # Hooksとは...
 * 1. Componet内で状態を管理するState
 * 2. Componetの時間の流れに基づくLife Cycle
 *
 * # useStateを使う理由
 * - Dom操作を簡略化するため
 * - Component内で状態を持っておいて値が変更された時に再描画するための仕組み
 * @returns ?
 */
const AppHooks = () => {
  return (
    <>
      <Counter c={0} boolean={false} />
      <Counter c={10000} boolean={true} />
    </>
  );
};

export default AppHooks;
