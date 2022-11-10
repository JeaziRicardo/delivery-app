import styled from 'styled-components';

export const Custombar = styled.nav`
  border-bottom: 1px solid var(--borda);
  background-color: var(${(props) => props.color});
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  hr {
    border: none;
    width: 1px;
    background-color: var(--borda2);
  }
  a[value~=${(props) => props.color}] {
    background-color: var(--destaque);
    color: white;
    svg: {
      color: white;
    }
  }
  a, div {
    align-items: center;
    color: var(--destaque);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 150px;
    flex-grow: 1;
    svg {
      font-size: 40px;
    }
  }

`;

export const bola = styled.h1`
  border: 1px solid red;
`;
