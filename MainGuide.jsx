import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));
/*


<App />をrenderし、index.htmlのルートid要素を取得している。
ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


component
=> 画面要素の1つの単位（1画面から、1テキストボックスまで様々）


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


Props
=> コンポーネントに渡される引数的なもの。


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


useState (const [ 自由な値, set自由な値 ] = useState(初期値);)
=> 各コンポーネートが持つ状態(可変)。動的に条件に応じ様々な情報を表示できる。


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


useEffect (() => {}, []);
=> 関心の分離をしたいときに使う　第2引数に配列を置き、空、変数、複数の変数を持つことができる
  そのコンポーネントで表示したい1回のみ走らせたい処理を書くことができる。
  変数が変化した時のみ、中の処理が走る。


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


memo
=> import { memo } from "react"; 関数処理の前にmemo()記載でレンダリングの最適化ができる。


ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


useCallback
=> import必要。useEffectと似ている。useCallback(()=>{関数}, [依存配列])
   アロー関数で書いた関数はpropsとしては毎回新しい関数を生成しているという判断になり、レンダリングされてしまう。
   子コンポーネントでmemo化していても、親コンポーネントで使い回す指示を与えなければいけない。
   子コンポーネントのメモ化とそこに関数を与える場合、関数のメモ化もし組み合わせる必要がある。


ーーーーーーーーーーーーーーーーーーーーー　styleに関して　ーーーーーーーーーーーーーーーーーーーーーーーーー


styled-components
=> import styled from 'styled-components';で
   const Container = styled.div`
    -----
    -----
    -----
   `;

   <Container>----</Container>
   のようにスタイルをsass方式でも当てることが可能。メインで使える。


ーーーーーーーーーーーーーーーーーーーーー　画面遷移に関して　ーーーーーーーーーーーーーーーーーーーーーーーーーー


React Router
=> import { BrowserRouter, Link, Switch, Route } from "react-router-dom";をimportし
  リンクさせたいコンポーネントに<BrowserRouter>　→　<Link to = "">　→　<Switch>　→　<Route path = "">の順で囲む。

ネストの場合
=> <Route path="" render {({ match: {url} }) => ()} />で表現できる。router dirを作り Router.jsxで別管理するのが通常。

Router.jsx内
=>　ネスト毎の設定を別ファイルに切り出し配列としてRouter.jsxに返すことでよりコードの見通しが良くなる。
    exact path component(children)で設定する。

URLパラメーターの場合
=>　動的に変わるparameter.../page2/:id
    :でpath指定することで動的に表現できる。
    react-router-domのHooksのuseParams()で動的にidを受け取ることができる。そのidの画面表示ができる。

stateを渡すページ遷移　情報を持ったままアクセスできるので無駄なAPIアクセスが減る。
=>　to = {{ pathname: "~", sttate: 変数名 }}
  値を引き継ぎたいページで{ useLocation } をimport
  任意の変数で = useLocation();で変数に受け取ることができる。

useHistory Linkを使わないページ遷移
=>　button等に割り当てても使える。詳細の挙動はPage1.jsx確認。
    push("redirect先"),goBack("")をアロー関数で指定し、onClickに割り当てる。


ーーーーーーーーーーーーーーーーーーー　コンポーネントの分割に関して　ーーーーーーーーーーーーーーーーーーーーーーーー


Atomic Design
画面要素を ATOMS, MOLECULES, ORGANISMS, TEMPLATES, PAGESの5段階に分け組み合わせることでUIを実現
コンポーネント化された要素が画面を構成しているという考え。React,Vue用というわけではない

Atoms...ボタン、アイコン、テキストボックスなど　最も小さいパーツ
Molecules...Atomの組み合わせで意味を持つデザインパーツ アイコン＋メニュー名、プロフィール画像＋テキストボックス等
Organisms...AtomやMoleculeの組み合わせ。単位である程度の意味を持つ要素。ツイート入力エリアやヘッダーメニューバー等
Templates...ページレイアウトのみ表現する要素(実際のデータを持たない)
Pages...最終的に表示される1画面

ex)atoms
  components/atoms/button/~~~~.jsxで部品化する。 (props) => {
    const {children} = props;
    return ( <SButton>{ children }</SButton>)
  };　のように分割代入することで使い回しができる。
  styleベタがき、切り出してstyle.button``,(BaseButton)``でスタイリングもできる。

  components/src/atoms
  components/src/molecules
  components/src/organism
  components/src/templates
  components/src/pagesを参照


ーーーーーーーーーーーーーーーーーーー　グローバルなstate管理について　ーーーーーーーーーーーーーーーーーーーーーーーー


Contextでのstate管理
  providersフォルダを作成 => import { createContext } from "react";
  詳細は上記フォルダ内。useStateで定義した関数、set関数を
  <~~~.Provider value={{ , }}>左記オブジェクト内に入れた値が他ファイルで使える。
  適用したいコンポーネントにconst {~~~} = useContext(関数);で定義し
  set関数に処理を加えることで値の変化に応じた処理が可能。

  contextを用いる場合はどのコンポーネントが再レンダリングされるのかを確認し
  memo()化をすることで余計な呼び出しを防げる。設計時にconsole.log("")で確認しながら重複を避ける。

  Recoilライブラリでグローバルなstate管理も簡単に可能。
  少ない記述、useSetRecoilStateで更新関数のみ受け取ることで、勝手に不要な再レンダリングを制御してくれる。


ーーーーーーーーーーーーーーーーーーー　TypeScript　ーーーーーーーーーーーーーーーーーーーーーーーー


typeList.tsxを参照。型定義をすることでエラー検知、補完機能がつくためバグを予防できる。

  効率的な型定義は別ファイルで管理する。 (ex: src/types/todo.tsx

  props: Pick<TodoType, "~~~" | "~~~" >
  props: Omit<TodoType, "~~~" >
  で他フォルダから参照し型指定ができる。オブジェクトが少ない場合はOmitの方がスッキリ書ける。

  関数コンポーネント自体の型指定（FCを使う）...明示的に指定することで受け取り先でエラー検知や保管ができるようにするため。
  (ex:  Tsxt: FC<Props> ...暗黙的に内部的にchildrenを受け取れるようになっている。
  React v18からchildrenは含まない。

  オプショナルチェイニング
  渡したPropsに値がなくエラーを回避したい場合 ? を使い回避できる。

*/
