import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { FullCardWrapper } from "./style";
import { EpisodeItem } from "../components/EpisodeItem/Index";
import { EpisodeType } from "../@types/types";

const cardType = {
  created: "",
  episode: [],
  gender: "",
  id: 1,
  image: "",
  location: {
    name: "",
    url: "",
  },
  name: "",
  origin: {
    name: "",
    url: "",
  },
  species: "",
  status: "",
  type: "",
  url: "",
};

export const FullCard: React.FC = () => {
  const [card, setCard] = useState(cardType);
  const [locationID, setLocationID] = useState();
  const [originID, setOriginID] = useState();
  const { name, status, species, type, image, gender, episode, location, origin } = card;
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCard() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCard(data);
      } catch (error) {
        alert("Error");
        console.log(error);
        navigate("/");
      }
    }
    fetchCard();
  }, []);

  useEffect(() => {
    episode?.map(async (item) => {
      const { data } = await axios.get(item);
      setEpisodes((prev) => [...prev, data]);
    });
  }, [card]);

  useEffect(() => {
    async function fetchLocationID() {
      try {
        const { data } = await axios.get(location.url);
        setLocationID(data.id);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchOriginID() {
      try {
        const { data } = await axios.get(origin.url);
        setOriginID(data.id);
      } catch (error) {
        console.log(error);
      }
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
