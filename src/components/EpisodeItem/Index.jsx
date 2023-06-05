import { Link } from "react-router-dom";
import styles from "./EpisodeItem.module.scss";

export const EpisodeItem = ({ episodes }) => {
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
