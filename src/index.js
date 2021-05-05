import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));
/* <App />をrenderし、index.htmlのルートid要素を取得している */


/*
component
=> 画面要素の1つの単位（1画面から、1テキストボックスまで様々）

Props
=> コンポーネントに渡される引数的なもの

useState (const [ 自由な値, set自由な値 ] = useState(初期値);)
=> 各コンポーネートが持つ状態(可変)。動的に条件に応じ様々な情報を表示できる

useEffect(() => {
}, []);
=> 関心の分離をしたいときに使う　第2引数に配列を置き、空、変数、複数の変数を持つことができる
  そのコンポーネントで表示したい1回のみ走らせたい処理を書くことができる。
  変数が変化した時のみ、中の処理が走る。
*/
