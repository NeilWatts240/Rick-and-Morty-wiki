import { useState, useEffect } from "react";
import axios from "axios";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export const Home = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [info, setInfo] = useState("");
  const [items, setItems] = useState([]);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`
        );
        setItems(data.results);
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
          {items.map((obj) => (
            <Card key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <Pagination info={info} currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};
