import { useParams, useLocation } from "react-router-dom"

export const Urlparameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  /* locationの中のsearchにUrl情報が入っている。 */
  const query = new URLSearchParams(search);
  /* URLSearchParamsはqueryが便利に扱えるメソッドを多く提供している。 */
  return (
    <>
      <h1>Urlparameterです</h1>
      <p>パラメーターは {id} です</p>
      <p>クエリメーターは {query.get("name")} です</p>
    </>
  );
};
