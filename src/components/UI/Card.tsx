import "./Card.css";

function Card(props: any) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}

export default Card;
