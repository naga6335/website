import React, { useEffect, useState } from 'react';


/* exportされたコンポーネントをjsx記法で受け取っている */
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {


  /* useState 1つめに好きな変数名、2つめに動的な関数名 */
  const [num, setNum] = useState(0);
  const [switchShowFlag, setSwitchShowFlag] = useState(false);


  /* この関数をボタンイベントに当てはめる */
  const onClickCountUp = () => {
    setNum(num + 1);
    /* 更新できる関数の設定 */
  }


  const onClickSwitchShowFlag = () => {
    setSwitchShowFlag(!switchShowFlag)
  }


  /* useEffectで関心を分離している */
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        switchShowFlag || setSwitchShowFlag(true);
      } else {
        switchShowFlag && setSwitchShowFlag(false);
      }
    }
  }, [num]);


  return (
    <>
      {/* オブジェクトで変数を定義しスタイルに当てることができる */}
      <h1 style={contentStyle}>Hello World</h1>


      {/* コンポーネントに対して任意の名称に値をおくことでPropsを渡せる。タグで囲った中身をchildrenとしても渡せる。 */}
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>


      {/* キャメルケースで記載しjsx記法でイベントを受け取る */}
      <button onClick={onClickCountUp}>UP</button>
      <p>{num}</p>


      {/* 論理演算子でtrue,false判定をしている */}
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {switchShowFlag && <p>表示されました</p>}

    </>
  );
};

export default App;
/* 親コンポーネントに受け渡している */


/* 以下memo、useCallbackに関するコード */
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea"
import "./styles.css";

export default function App() {


  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  /* 子コンポーネントに対し関数を与えているためmemo化している */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);


  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}


/* 以下React Routerに関するコード */
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
/* importで上記の設定は必須 */

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        {/* Link to でパスを指定し、Routeで使用 */}
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>

      <Switch>
        <Route exact path="/">
          {/* exactをつけないと最初のパスが繰り返しレンダリングされてしまうので注意。パス以降は上記Link toと揃える。 */}
          <Home />
          {/* 出したいコンポーネントを記載 */}
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

/* ネストに対する応用的な書き方 */
<Route
  path="/page1"
  /* renderで引数にアロー関数でreturnの複数中身を受け取ることができる。
  上記ではpropsを受け取っている。page1の記載をmatch: urlで共通記載できる。*/

  render={({ match: { url } }) => (
    <Switch>
      <Route exact path={url}>
        <Page1 />
      </Route>
      <Route path={`${url}/detailA`}>
        <Page1DetailA />
      </Route>
      <Route path={`${url}/detailB`}>
        <Page1DetailB />
      </Route>
    </Switch>
  )}
/>
