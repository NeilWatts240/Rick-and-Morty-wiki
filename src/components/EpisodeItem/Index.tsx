import { Link } from "react-router-dom";
import styles from "./EpisodeItem.module.scss";
import { EpisodeType } from "../../@types/types";

type EpisodeItemPropsType = { episodes: EpisodeType[] };

export const EpisodeItem: React.FC<EpisodeItemPropsType> = ({ episodes }) => {
  return (
    <div className={styles.episodes}>
      {episodes.map((item, index) => (
        <div key={index}>
          <span>{item.episode}</span>
          <Link to={`/episodes/${item.id}`}>
            <button className={styles.episodeItem}>{`${item.name}`}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
