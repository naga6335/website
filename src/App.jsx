import React, { useState } from 'react';
import { ColorfulMessage } from "./components/ColorfulMessage";
/* exportされたコンポーネントをjsx記法で受け取っている */

const App = () => {

  const onClickCountUp = () => {
    /* この関数をボタンイベントに当てはめる */

    setNum(num + 1);
    /* 更新できる関数の設定 */
  }


  const [num, setNum] = useState(0);
  /* 1つめに好きな変数名、2つめに動的な関数名 */

  return (
    <>

      <h1 style={contentStyle}>Hello World</h1>
      {/* オブジェクトで変数を定義しスタイルに当てることができる */}

      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      {/* コンポーネントに対して任意の名称に値をおくことでPropsを渡せる。タグで囲った中身をchildrenとしても渡せる。 */}

      <button onClick={onClickCountUp}>UP</button>
      {/* キャメルケースで記載しjsx記法でイベントを受け取る */}

      <p>{num}</p>
    </>
  );
};

export default App;
/* 親コンポーネントに受け渡している */
