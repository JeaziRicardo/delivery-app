import styled from 'styled-components';

export const ContainerProducts = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 750px;
`;

export const Item = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 5px var(--borda);
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: space-around;
  margin: 5px;
  width: 185px;
  text-align: left;
  img {
    height: 120px;
  }
  hr {
    border: none;
    height: 0.3px;
    width: 100%;
    background-color: var(--borda2);
  }
  p:first-of-type {
    text-align: center;
    font-size: 16px;
    font-weight: 200;
    width: 80%;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 300px;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    padding: 10px;
    width: 150px;
    input {
      border: 0.5px solid var(--borda2);
      height: 30px;
      width: 50px;
      text-align: center;
    }
    button {
      border: 1.5px solid var(--borda2);
      background-color: white;
      border-radius: 100px;
      height: 30px;
      width: 30px;
      font-size: 15px;
      font-weight: 500;
      :hover:enabled {
        border: 1.5px solid var(--borda2);
        background-color: var(--destaque);
        color: white;
      }
      :disabled {
        background-color: var(--desabilitado);
        cursor: not-allowed;
      }
    }
  }
`;

export const FloatCar = styled.button`
  align-items: center;
  border: 1px solid var(--borda);
  border-radius: 100px;
  background-color: var(--destaque);
  bottom: 50px;
  display:flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  position: fixed;
  right: 10px;
  width: 80px;
  z-index: 1;
  svg {
    font-size: 30px;
  }
  :enabled {
      color: white;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
`;
