import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));
/* <App />をrenderし、index.htmlのルートid要素を取得している。

component
=> 画面要素の1つの単位（1画面から、1テキストボックスまで様々）


Props
=> コンポーネントに渡される引数的なもの。


useState (const [ 自由な値, set自由な値 ] = useState(初期値);)
=> 各コンポーネートが持つ状態(可変)。動的に条件に応じ様々な情報を表示できる。


useEffect (() => {}, []);
=> 関心の分離をしたいときに使う　第2引数に配列を置き、空、変数、複数の変数を持つことができる
  そのコンポーネントで表示したい1回のみ走らせたい処理を書くことができる。
  変数が変化した時のみ、中の処理が走る。


memo
=> import { memo } from "react"; 関数処理の前にmemo()記載でレンダリングの最適化ができる。


useCallback
=> import必要。useEffectと似ている。useCallback(()=>{関数}, [依存配列])
   アロー関数で書いた関数はpropsとしては毎回新しい関数を生成しているという判断になり、レンダリングされてしまう。
   子コンポーネントでmemo化していても、親コンポーネントで使い回す指示を与えなければいけない。
   子コンポーネントのメモ化とそこに関数を与える場合、関数のメモ化もし組み合わせる必要がある。


styled-components
=> import styled from 'styled-components';で
   const Container = styled.div`
    -----
    -----
    -----
   `;

   <Container>----</Container>
   のようにスタイルをsass方式でも当てることが可能。メインで使える。

React Router
=> import { BrowserRouter, Link, Switch, Route } from "react-router-dom";をimportし
  リンクさせたいコンポーネントに<BrowserRouter>　→　<Link to = "">　→　<Switch>　→　<Route path = "">の順で囲む。

  ネストの場合

*/
