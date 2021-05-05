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
