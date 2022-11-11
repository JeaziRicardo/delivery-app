import styled from 'styled-components';

const DeliveryDetails = styled.div`
  /* border: 1px solid red; */
  button {
    background-color: var(--destaque);
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0.8px 2px var(--sombra);
    font-weight: 600;
    margin-left: 115px;
  }
  input {
    margin-top: 10px;
  }
  select {
    border: 0.5px solid var(--borda);
    border-radius: 4px;
    background-color: white;
    margin-left: 10px;
  }
  .address {
    height: 25px;
    padding: 10px;
    width : 250px;
    border: 0.5px solid var(--borda);
    border-radius: 4px;
    background-color: white;
    margin-left: 10px;
  }
  .address-number {
    height: 25px;
    padding: 10px;
    width : 50px;
    border: 0.5px solid var(--borda);
    border-radius: 4px;
    background-color: white;
    margin-left: 10px;
  }
`;

export default DeliveryDetails;
