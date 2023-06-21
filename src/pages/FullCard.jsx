import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { FullCardWrapper } from "./style";
import { EpisodeItem } from "../components/EpisodeItem/Index";

export const FullCard = () => {
  const [card, setCard] = React.useState([]);
  const [locationID, setLocationID] = React.useState();
  const [originID, setOriginID] = React.useState();
  const { name, status, species, type, image, gender, episode, location, origin } = card;
  const [episodes, setEpisodes] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [idd, setIdd] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(card);

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
    async function fetchLocationID() {
      const { data } = await axios.get(location.url);
      setLocationID(data.id);
    }
    async function fetchOriginID() {
      const { data } = await axios.get(origin.url);
      setOriginID(data.id);
    }

    fetchOriginID();
    fetchLocationID();
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
            {type && <div className="fullcard-item">Type: {type}</div>}
            {location && (
              <div className="fullcard-item div-link">
                Location :
                <Link to={`/location/${locationID}`}>
                  <span>{location.name}</span>
                </Link>
              </div>
            )}
            {origin && (
              <div className="fullcard-item div-link">
                Origin :
                <Link to={`/location/${originID}`}>
                  <span>{origin.name}</span>
                </Link>
              </div>
            )}
            <button className="fullcard-button" onClick={() => setIsOpen((isOpen) => !isOpen)}>
              Show episodes
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
