import styled from 'styled-components';

const DeliveryDetails = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
    label {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      margin: 0 10px;
    }
  }

  h2 {
    margin: 10px 10px;
  }

  button {
    align-self: center;
    background-color: var(--destaque);
    box-shadow: 0px 0.8px 2px var(--sombra);
    border: none;
    border-radius: 4px;
    font-weight: 500;
    height: 40px;
    margin-top: 10px;
    width : 250px;
  }

  input, select {
    border: 0.5px solid var(--borda);
    border-radius: 4px;
    background-color: white;
    font-weight: 300;
    font-size: 14px;
    margin-top: 10px;
    padding: 5px;
  }

  select {
    width: 334px;
  }
  .address {
    width : 250px;
  }
  .address-number {
    width : 50px;
    margin-left: 10px;
  }
`;

export default DeliveryDetails;
