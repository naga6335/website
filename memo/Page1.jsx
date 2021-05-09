import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA")
  /* useHistoryをhistory関数に格納。pushで遷移先を指定している。 */

  return (
    <>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      {/* 画面遷移時に情報を他のページに受け渡す場合、上記の設定。 */}
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>Detail1</button>
      {/* 定義した関数を割り当てている。 */}
    </>
  );
};
