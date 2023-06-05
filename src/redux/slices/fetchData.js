import axios from "axios";

export const fetchCards = ({ currentPage, searchValue, status, gender, species }) => {
  const fetch = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchValue}&status=${status}&gender=${gender}&species=${species}`
    );
    return data;
  };
  fetch();
};
