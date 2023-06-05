import { Collapse } from "antd";
const { Panel } = Collapse;

export const Sort = ({ setStatus, setGender, setSpecies }) => {
  const statusArray = ["Alive", "Dead", "Unknown"];
  const speciesArray = ["Human", "Alien", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];
  const genderArray = ["Female", "Male", "Genderless", "Unknown"];

  const onClickClear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
  };

  return (
    <div className="sort">
      <Collapse accordion>
        <Panel header="Status" key="1">
          {statusArray.map((item, index) => (
            <button onClick={() => setStatus(item)} key={index}>
              {item}
            </button>
          ))}
        </Panel>
        <Panel header="Species" key="2">
          {speciesArray.map((item, index) => (
            <button onClick={() => setSpecies(item)} key={index}>
              {item}
            </button>
          ))}
        </Panel>
        <Panel header="Gender" key="3">
          {genderArray.map((item, index) => (
            <button onClick={() => setGender(item)} key={index}>
              {item}
            </button>
          ))}
        </Panel>
      </Collapse>
      <button onClick={onClickClear} className="clear-button">
        Clear
      </button>
    </div>
  );
};
