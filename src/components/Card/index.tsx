import { Link } from "react-router-dom";
import { CardWrapper } from "./style";

type CardPropsType = {
  id: number;
  name: string;
  image: string;
  status: string;
};

export const Card: React.FC<CardPropsType> = ({ id, name, image, status }) => {
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
