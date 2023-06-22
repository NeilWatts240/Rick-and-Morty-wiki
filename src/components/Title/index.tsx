import React from "react";
import styles from "./Title.module.scss";

type TitlePropsType = {
  data: {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
    air_date: string;
    episode: string;
  };
};

export const Title: React.FC<TitlePropsType> = ({ data }) => {
  return (
    <div className={styles.title}>
      {data.episode && (
        <>
          <h1>
            Episode : <span className={styles.episode}>{data.episode}</span>
            <span className={styles.name}> {data.name}</span>
          </h1>
          <h2>Air Date : {data.air_date}</h2>
        </>
      )}
      {data.dimension && (
        <>
          <h1>
            Location : <span className={styles.name}>{data.name}</span>
          </h1>
          <h2>Dimension : {data.dimension}</h2>
          <h3>Type : {data.type}</h3>
        </>
      )}
    </div>
  );
};
