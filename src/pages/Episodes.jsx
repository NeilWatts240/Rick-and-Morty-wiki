import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const Episodes = () => {
  const [episodes, setEpisodes] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const { id } = useParams();

  const onClickBtn = (item) => {
    setCharacters([]);
  };

  React.useEffect(() => {
    async function fetchEpisodes() {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/episode`);
      setEpisodes(data.results);
    }
    fetchEpisodes();
  }, []);

  React.useEffect(() => {
    async function fetchLinks() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        setLinks(data.characters);
      } catch (error) {
        alert("Error");
      }
    }
    fetchLinks();
  }, [id]);

  React.useEffect(() => {
    links.map(async (item) => {
      const { data } = await axios.get(item);
      setCharacters((prev) => [...prev, data]);
    });
  }, [links]);

  return (
    <>
      <Header />
      <div className="home">
        <Collapse accordion>
          <Panel header="Episodes" key="1">
            {episodes.map((item) => (
              <Link to={`/episodes/${item.id}`}>
                <button key={item.id} onClick={() => onClickBtn(item)}>
                  {item.id}
                  {item.name}
                </button>
              </Link>
            ))}
          </Panel>
        </Collapse>
        <div className="Home-content">
          {characters.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};
