import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  /* memo化でUsersの切り替えボタンが押された際の再レンダリングを制御している。 */
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  /* Providerから値を直接参照できるようになっている。useContextの引数に参照したい値の変数名を入れると値が取得できる。 */
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  /* Provider -> Top.jsxのClickイベントないのisAdmin判定を受け取り表示切り替えを行う行 */

  return (
    <SContainer>
      <SImage height={150} width={150} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
font-size: 18px;
font-weight: bold;
margin: 0;
color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
