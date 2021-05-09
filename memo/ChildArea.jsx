import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "skyblue",
}

export const ChildArea = memo((props) => {

  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
