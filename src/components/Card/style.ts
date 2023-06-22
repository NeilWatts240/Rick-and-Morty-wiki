import styled from "styled-components";

export const CardWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100px;
    height: 120px;
  }
  position: relative;
  cursor: pointer;
  border: 1px solid rgb(73, 98, 210);
  margin: 10px;
  width: 210px;
  border-radius: 20px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  p {
    @media (max-width: 768px) {
      margin: 0;
      font-size: 10px;
    }
    font-weight: 600;
    font-size: 18px;
    padding-left: 10px;
  }

  img {
    @media (max-width: 768px) {
      width: 100%;
      height: 80px;
    }
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
  }

  .status-Alive {
    @media (max-width: 768px) {
      padding: 0px;
      border-top-right-radius: 20px;
      margin-right: 0px;
      margin-top: 0px;
    }
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: green;
    padding: 5px;
    color: white;
  }

  .status-Dead {
    @media (max-width: 768px) {
      padding: 0px;
      border-top-right-radius: 20px;
      margin-right: 0px;
      margin-top: 0px;
    }
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
    background-color: red;
    color: white;
  }

  .status-unknown {
    @media (max-width: 768px) {
      padding: 0px;
      border-top-right-radius: 20px;
      margin-right: 0px;
      margin-top: 0px;
    }
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
    background-color: gray;
    color: white;
  }

  &:hover {
    box-shadow: 0px 20px 20px rgb(73, 98, 210, 0.3);
    transform: translateY(-5px);
  }
`;
