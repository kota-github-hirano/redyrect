import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoで囲むことでpropsが変更あった場合にのみ再レンダリング
//基本的にはコンポーネントはmemoで囲む
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChaildAreaがレンダリングされた");

  const data = [...Array(1000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
