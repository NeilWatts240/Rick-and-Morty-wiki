import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <button>Characters</button>{" "}
      </Link>

      <Link to={"/episodes/1"}>
        <button>Episodes</button>
      </Link>

      <Link to={"/location/1"}>
        <button>Location</button>
      </Link>
    </div>
  );
};
