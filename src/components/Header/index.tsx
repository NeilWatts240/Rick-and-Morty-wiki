import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search";
import { NavBar } from "../NavBar";

type HeaderPropsType = {
  setSearchValue?: (value: string) => void;
};

export const Header: React.FC<HeaderPropsType> = ({ setSearchValue }) => {
  const location = useLocation();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to="/">
          <div>
            <h1>
              Rick and Morty <span>Wiki</span>
            </h1>
          </div>
        </Link>
        {location.pathname === "/" && <Search setSearchValue={setSearchValue} />}
        <NavBar />
      </div>
    </div>
  );
};
