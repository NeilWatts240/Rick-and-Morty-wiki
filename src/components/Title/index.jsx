import styles from "./Title.module.scss";

export const Title = ({ data }) => {
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
