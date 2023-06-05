import { Link } from "react-router-dom";
import { CardWrapper } from "./style.js";

export const Card = ({ id, name, image, status }) => {
  return (
    <CardWrapper>
      <div className={`status-${status}`}>{status}</div>
      <Link key={id} to={`/character/${id}`}>
        <img src={image} alt="cardImage" />
      </Link>
      <p>{name} </p>
    </CardWrapper>
  );
};
