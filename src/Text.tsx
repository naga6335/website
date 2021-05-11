import { VFC } from "react";

/* 型宣言 */
type Props = {
  color: string;
  fontSize: string;
}

/* 関数コンポーネント自体に型指定を行なっている。 */
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
}
