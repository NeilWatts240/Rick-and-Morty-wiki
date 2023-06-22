import { Link } from "react-router-dom";
import styles from "./EpisodeList.module.scss";
import React from "react";
import { EpisodeType } from "../../@types/types";

type EpisodeListPropsType = {
  episodes: EpisodeType[];
};

export const EpisodeList: React.FC<EpisodeListPropsType> = ({ episodes }) => {
  return (
    <div className={styles.episodesList}>
      <h2>Pick episode</h2>
      <div className={styles.list}>
        {episodes.map((item) => (
          <Link key={item.id} to={`/episodes/${item.id}`}>
            <button>
              {item.id}
              <span>{item.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
