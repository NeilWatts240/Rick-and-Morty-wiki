import { useState, useEffect } from "react";
import axios from "axios";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { CharacterType } from "../@types/types";

const infoType = {
  count: 1,
  next: "",
  pages: 1,
  prev: "",
};

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [info, setInfo] = useState(infoType);
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`
        );
        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [currentPage, searchValue, status, gender, species]);

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      <div className="home">
        <Sort setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} />
        <div className="Home-content">
          {characters.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <Pagination info={info} currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
