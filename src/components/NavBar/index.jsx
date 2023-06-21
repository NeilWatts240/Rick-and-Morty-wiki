import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

export const NavBar = () => {
  const active = styles.active;

  return (
    <div className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => (isActive ? active : undefined)}>
        Characters
      </NavLink>

      <NavLink to="/episodes/1" className={({ isActive }) => (isActive ? active : undefined)}>
        Episodes
      </NavLink>

      <NavLink to="/location/1" className={({ isActive }) => (isActive ? active : undefined)}>
        Location
      </NavLink>
    </div>
  );
};
