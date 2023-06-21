import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { EpisodeList } from "../components/EpisodeList";
import { Title } from "../components/Title";

export const Episodes = () => {
  const [episodes, setEpisodes] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const [data, setData] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const fetch = async (link) => {
      const { data } = await axios.get(link);
      data.results.map((item) => {
        setEpisodes((prev) => [...prev, item]);
      });
    };

    fetch("https://rickandmortyapi.com/api/episode");
    fetch("https://rickandmortyapi.com/api/episode?page=2");
    fetch("https://rickandmortyapi.com/api/episode?page=3");
  }, []);

  React.useEffect(() => {
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

  React.useEffect(() => {
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
