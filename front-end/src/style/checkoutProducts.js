import styled from 'styled-components';

export const ContainerCheckout = styled.div`
  height: 100vh;
`;

export const ContainerForm = styled.div`
  /* align-items: center; */
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  table {
    /* border: 1px solid black; */
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
