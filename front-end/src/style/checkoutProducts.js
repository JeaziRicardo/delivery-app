import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  height: 100vh;
`;

export const ContainerForm = styled.div`
  align-items: center;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  table {
    border: 1px solid black;
    margin-bottom: 10px;
    width: 90vw;
    img {
      height: 30px;
      width: 30px;
    }
  }
  .totalPrice {
    align-items: flex-end;
    border: 1px solid green;
  }
`;
