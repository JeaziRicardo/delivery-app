import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  height: 100vh;

  hr {
    border: none;
    height: 0.5px;
    background-color: var(--borda2);
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;


  table {
    margin-bottom: 10px;
    width: 90vw;
    img {
      height: 30px;
      width: 30px;
    }
  }
  .remove-btn {
    background-color: #fff;
    border: none;
  }
  .totalPrice {
    align-self: flex-end;
    background-color: var(--destaque);
    border: none;
    border-radius: 4px;
    font-weight: 600;
    margin-right: 5px;
  }

`;
