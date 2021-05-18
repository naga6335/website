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




/* 以下memo、useCallbackに関するコード */
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea"
import "./styles.css";

export default function App() {


  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

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
      {/* 下記Routerでネストのルーティングを切りだし見通しをよくしている。 */}
      <Router />
    </BrowserRouter>
  );
}



/* ーーーーーーーーーーーー　Atomic-designに基づいた親コンポーネント例 ーーーーーーーーーーーー　*/
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";


/* 親コンポーネントからこコンポーネントへpropsで情報を受け渡している。 */
const user = {
  name: "nobu",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "example@example.com",
  phone: "000-0000-0000",
  company: {
    name: "テスト株式会社"
  },
  website: "https//google.com",
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
      {/* user変数の中身のオブジェクトをuserに渡している。 */}
    </div>
  );
}


/* ーーーーーーーーーーーー　createContextによるグローバルなstate管理 ーーーーーーーーーーーー　*/
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    /* グローバールStateの対象を囲む */
    <UserProvider>
      <Router />
    </UserProvider>
  );
  ;
}


/* ーーーーーーーーーーーー　TypeScript ーーーーーーーーーーーー　*/
import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { TodoType } from "./types/todo";
import { User } from "./types/user";

const user: User = {
  name: "nobu",
  hobbies: ["aaa", "bbb"]
};

export default function App() {
  const [todos, setTodos] = useState < Array < TodoType >> ([]);
  const onClickFetchData = () => {
    axios
      .get < Array < TodoType >> ("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res.data);
        });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
