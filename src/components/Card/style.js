import styled from "styled-components";

export const CardWrapper = styled.div`
  cursor: pointer;
  border: 1px solid #d8d8d8;
  padding: 20px;
  margin: 10px;
  width: 210px;
  border-radius: 20px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  img {
    width: 100%;
  }

  .status-Alive {
    background-color: green;
  }

  .status-Dead {
    background-color: red;
  }

  .status-unknown {
    background-color: gray;
  }

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }
`;
