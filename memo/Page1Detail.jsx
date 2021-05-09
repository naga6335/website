import { useLocation, useHistory } from 'react-router-dom';

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack("/page1");
  /* goBackで戻ることができる。 */

  return (
    <>
      <h1>Page1DetailAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};
