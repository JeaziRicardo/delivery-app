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
  border-bottom: 1px solid var(--borda);
  .middle-info {
    display: flex;
    justify-content: space-between
  }
  p[value~='Pendente'] {
    color: var(--destaque)
  }
  .price {
    font-weight: 500;
  }
`;

export const bola = styled.h1`
`;
