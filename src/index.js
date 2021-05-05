import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));
/* <App />をrenderし、index.htmlのルートid要素を取得している */


/*
コンポーネント
=> 画面要素の1つの単位（1画面から、1テキストボックスまで様々）

Props
=> コンポーネントに渡される引数的なもの

State
=> 各コンポーネートが持つ状態(可変)。動的に条件に応じ様々な情報を表示できる
*/
