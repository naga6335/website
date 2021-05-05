import React from 'react';

export const ColorfulMessage = (props) => {

  const { color, children } = props;
  /* 分割代入でpropsの中身を名称に渡している。*/

  const contentStyle = {
    color: color,
    /* 名称を渡している。 */
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>
  /* childrenでタグ囲みした文字を渡せる。 */
}
