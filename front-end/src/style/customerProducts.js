import styled from 'styled-components';

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: 1px solid blue;
`;

export const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  width: 45%;
  img {
    height: 120px;
  }
  div {
    input {
      height: 30px;
      width: 50px;
      text-align: center;
    }
    button {
      height: 30px;
      width: 25px;
    }
  }
`;

export const teste = styled.h1`
  color: red;
`;
