import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  /* useContextの引数でProviderのタグ情報を受け取り、変数であるsetStateに渡す。
  下記でクリックイベント時に変数に状態を渡し、ページ遷移で判定をつけている。 */

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: ture });
    history.push("/users");
  }

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  }

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
