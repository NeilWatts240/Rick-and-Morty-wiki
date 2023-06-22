import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { LocationList } from "../components/LocationList";
import { LocationType, CharacterType } from "../@types/types";

const locationType = {
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

export const Location: React.FC = () => {
  const [data, setData] = useState(locationType);
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [residents, setResidents] = useState([]);
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetch(link: string) {
      try {
        const { data } = await axios.get(link);
        data.results.map((item: LocationType) => {
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

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
        setData(data);
        setResidents(data.residents);
      } catch (error) {
        alert("Error");
      }
    }
    fetch();
  }, [id]);

  useEffect(() => {
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
