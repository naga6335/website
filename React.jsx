import React, { useState } from 'react';
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  /* useStateによる状態の変化を表現できる */
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <ColorfulMessage></ColorfulMessage>
      <button onClick={onClickCountUp}>UP!</button>
      <p>{num}</p>
    </>
  );
};
