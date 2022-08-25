export default function Try_Btn(props) {
  return (
    <button className="try__btn">{props.content || "ПОПРОБОВАТЬ БЕСПЛАТНО" }</button>
  );
}