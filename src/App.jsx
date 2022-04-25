/* eslint react-hooks/exhaustive-deps: off */ //これでuseEffect特有のエラーを表示させなくすることができる
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag); // 頭に！をつけると逆の意味になる
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true); // faceShowFlagをtrueにする処理が行われたら上から再レンダリングされる。そしてまたtrueにする処理がここで行われるので永遠ループになり、エラーが起きる。なので、trueの時は処理しないようにここでは書いている。
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps //個別で設定したいときはこの表記を使う
  }, [num]); // useEffectの第二引数に空の配列を渡すと、最初の再レンダリングがされなくなる。変数を入れると、その変数が変化した時だけ再レンダリング対象となる。useEffectの中に入っている変数を全て配列に入れないと準エラーが起こるが、気にしなくても良い。この場合numが変化した時だけuseEffect内の処理が行われるので、faceShowFlagがtrueやfalseに変更されたとしてもここの処理は再レンダリングされないようになる。

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  );
};

export default App;
