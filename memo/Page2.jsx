import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <>
      <h1>Page2です</h1>
      <Link to="/page2/999">URL Parameter</Link>
      {/* 999の箇所は実際は固定ではなくjavascriptで書いていく */}
      <br />
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </>
  );
};
