import styled from 'styled-components';

export const ContainerForm = styled.div`
  align-items: center;
  background-color: var(--fundo);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  align-items: center;
  background-color: rgba(255,255,255, 0.5);
  /* border: 0.5px solid black; */
  border-radius: 5px;
  box-shadow: 0px 1px 5px white;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-evenly;
  width: 300px;

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    input {
      /* border: 1px solid green; */
      height: 50px;
      padding: 10px;
      width : 250px;
      border: 0.5px solid var(--borda);
      border-radius: 4px;
      background-color: white;
    }
  }

  button {
    /* border: 1px solid red; */
    height: 40px;
    width : 250px;
    background-color: var(--destaque);
    box-shadow: 0px 0.8px 2px var(--sombra);
    border: none;
    border-radius: 4px;
    :hover:enabled {
      background-color: white;
      color: var(--destaque);
    }
    :disabled {
      background-color: var(--desabilitado)
    }
  }

  span:last-child {
    color: red;
  }

  svg {
    cursor: pointer;
    height: 25px;
    margin-left: 210px;
    margin-top: 25px;
    position: fixed;
    width: 50px;
    z-index: 2;
  }

`;
