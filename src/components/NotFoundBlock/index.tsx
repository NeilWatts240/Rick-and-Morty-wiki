import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";
import React from "react";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.block}>
      <div>{`Not found :(`}</div>
      <Link to="/">Back</Link>
    </div>
  );
};
