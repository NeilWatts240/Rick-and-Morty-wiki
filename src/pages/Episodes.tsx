import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { EpisodeList } from "../components/EpisodeList";
import { Title } from "../components/Title";
import { CharacterType, EpisodeType } from "../@types/types";

const episodeType = {
  id: "",
  name: "",
  type: "",
  dimension: "",
  residents: [],
  url: "",
  created: "",
  air_date: "",
  episode: "",
};

export const Episodes: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [data, setData] = useState(episodeType);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async (link: string) => {
      const { data } = await axios.get(link);
      data.results.map((item: EpisodeType) => {
        setEpisodes((prev) => [...prev, item]);
      });
    };

    fetch("https://rickandmortyapi.com/api/episode");
    fetch("https://rickandmortyapi.com/api/episode?page=2");
    fetch("https://rickandmortyapi.com/api/episode?page=3");
  }, []);

  useEffect(() => {
    async function fetchLinks() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setLinks(data.characters);
        setData(data);
      } catch (error) {
        alert("Error");
      }
    }
    fetchLinks();
  }, [id]);

  useEffect(() => {
    setCharacters([]);

    links.map(async (item) => {
      const { data } = await axios.get(item);
      setCharacters((prev) => [...prev, data]);
    });
  }, [links]);

  return (
    <>
      <Header />
      <Title data={data} />
      <div className="home">
        <EpisodeList episodes={episodes} />
        <div className="Home-content">
          {characters?.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};
