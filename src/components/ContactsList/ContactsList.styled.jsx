import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: none;
  /* margin-top: 20px; */
  padding: 0;
  margin-left: 800px;
`;

export const Li = styled.li`
  width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 7px;
  border: 3px solid red;
  border-radius: 15px;
  font-weight: 700;

  &:hover {
    background-color: #8cc351;
    color: white;
  }
`;
