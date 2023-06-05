import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { FullCardWrapper } from "./style";
import { Collapse } from "antd";
import { EpisodeItem } from "../components/EpisodeItem/Index";
const { Panel } = Collapse;

export const FullCard = () => {
  const [card, setCard] = React.useState([]);
  const { name, status, species, type, image, gender, episode, location, origin } = card;
  const [episodes, setEpisodes] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCard(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }
    fetchCard();
  }, []);

  React.useEffect(() => {
    episode?.map(async (item) => {
      const { data } = await axios.get(item);
      setEpisodes((prev) => [...prev, data]);
    });
  }, [card]);

  if (!card) {
    return <>Загрузка</>;
  }

  return (
    <>
      <Header />
      <div className="fullcard-container">
        <div className="fullcard-flex">
          <FullCardWrapper>
            <h1>{name}</h1>
            <img src={image} />
            <div className={`status-${status}`}>
              <span>{status}</span>
            </div>
            <div className="fullcard-item">Gender: {gender}</div>
            <div className="fullcard-item">Species: {species}</div>
            {type && <div>Type: {type}</div>}
            {location && (
              <Link to={location.url}>
                <div className="fullcard-item div-link">Location: {location.name}</div>
              </Link>
            )}
            {origin && (
              <Link to={origin.url}>
                <div className="fullcard-item div-link">Origin: {origin.name}</div>
              </Link>
            )}
            <button className="fullcard-button" onClick={() => setIsOpen((isOpen) => !isOpen)}>
              show episodes
            </button>
            <Link to="/">
              <button className="fullcard-button">Back</button>
            </Link>
          </FullCardWrapper>
          {isOpen && <EpisodeItem episodes={episodes} />}
        </div>
      </div>
    </>
  );
};
