import styled from "styled-components";

export const FullCardWrapper = styled.div`
  margin: auto;
  padding: 20px;
  margin: 10px;
  width: 50%;
 
  img {
    width: 100%;
  }

  h1 {
    margin-top: 0;

  }

  span {
    color: white;
    font-size: 24px;
    margin: auto;
    padding-left 50px
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
`;
