import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { LocationList } from "../components/LocationList";

export const Location = () => {
  const [data, setData] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [residents, setResidents] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetch(link) {
      try {
        const { data } = await axios.get(link);
        data.results.map((item) => {
          setLocations((prev) => [...prev, item]);
        });
      } catch (error) {
        alert("Error");
      }
    }

    fetch("https://rickandmortyapi.com/api/location");
    fetch("https://rickandmortyapi.com/api/location?page=2");
    fetch("https://rickandmortyapi.com/api/location?page=3");
    fetch("https://rickandmortyapi.com/api/location?page=4");
    fetch("https://rickandmortyapi.com/api/location?page=5");
    fetch("https://rickandmortyapi.com/api/location?page=6");
    fetch("https://rickandmortyapi.com/api/location?page=7");
  }, []);

  React.useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        setData(data);
        console.log(data);
        setResidents(data.residents);
      } catch (error) {
        alert("Error");
      }
    }
    fetch();
  }, [id]);

  React.useEffect(() => {
    setCharacters([]);
    async function fetch() {
      residents.map(async (item) => {
        const { data } = await axios.get(item);
        setCharacters((prev) => [...prev, data]);
      });
    }
    fetch();
  }, [residents]);

  return (
    <>
      <Header />
      <Title data={data} />
      <div className="home">
        <LocationList locations={locations} />
        <div className="Home-content">
          {characters?.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
    </>
  );
};
