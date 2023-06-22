import styled from "styled-components";

export const FullCardWrapper = styled.div`
  margin: auto;
  padding: 20px;
  margin: 10px;
 
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
    border-radius: 5px;
    background-color: green;
  }

  .status-Dead {
    border-radius: 5px;
    background-color: red;
  }

  .status-unknown {
    border-radius: 5px;
    background-color: gray;
  }
`;
