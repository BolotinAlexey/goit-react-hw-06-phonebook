import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :nth-of-type(odd) {
    background-color: #ddd;
  }
  button {
    padding: 2px 5px;
    margin-left: 10px;
    background-color: #c00;
    color: white;
    border: none;
    border-radius: 5px;

    :hover {
      background-color: #f00;
      color: white;
    }
    :active {
      transform: scale(1.1);
    }
  }
`;
