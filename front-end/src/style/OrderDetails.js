import styled from 'styled-components';

export const ContainerDetails = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin: 25px 15px;
`;

export const DetailsList = styled.div`
  margin: 20px 0;
  .date-card {
    font-size: 18px;
    font-weight: 500;
  }
  .order-id {
    font-weight: 500;
  }
`;

export const CardOrderItem = styled.div`

  margin: 15px 0;
  .middle-info {
    display: flex;
    border: 1px solid red;
    justify-content: space-between
  }
  hr {
    border: none;
    height: 0.3px;
    width: 100%;
    background-color: var(--borda);
  }
`;

export const bola = styled.h1`
`;
