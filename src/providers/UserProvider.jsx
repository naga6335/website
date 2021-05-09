import { createContext } from "react";
/*  Contextを作るのに必要な宣言 */

export const UserContext = createContext({});
/* コンテキストを作るために渡し、他画面から参照できるようにexportしている */


export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  /*  */

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* valueで囲ったオブジェクトがProviderで囲った配下のコンポーネントで参照できるようになる。 */}
      {children}
    </UserContext.Provider>
  )
}

/* 上記はお決まりのような表現になるので参考にする。 */
