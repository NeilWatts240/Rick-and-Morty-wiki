import { Link, useLocation } from "react-router-dom";
import { Search } from "../Search";
import { NavBar } from "../NavBar";

export const Header = ({ setSearchValue }) => {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <h1>Rick and Morty Wiki</h1>
        </div>
      </Link>
      {location.pathname === "/" && <Search setSearchValue={setSearchValue} />}
      <NavBar />
    </div>
  );
};
