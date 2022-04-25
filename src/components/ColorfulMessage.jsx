export const ColorfulMessage = (props) => {
  // default
  console.log("カラフル");
  const { color, children } = props; // propsはオブジェクトで渡されるので、分割代入ができる
  console.log(props);
  const contentStyle = {
    color: color, // プロパティ名と値が同じ名前の時は一つに省略できるらしい
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
