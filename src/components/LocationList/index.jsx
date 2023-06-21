import { Link } from "react-router-dom";
import styles from "./LocationList.module.scss";

export const LocationList = ({ locations }) => {
  return (
    <div className={styles.locationList}>
      <h2>Pick location</h2>
      <div className={styles.list}>
        {locations.map((item) => (
          <Link key={item.id} to={`/location/${item.id}`}>
            <button>{item.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};
