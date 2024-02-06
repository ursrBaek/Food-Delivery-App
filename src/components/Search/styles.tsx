import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding: 2.5%;
  display: flex;
  flex-flow: row nowrap;
`;

export const StyledInputBox = styled.div`
  margin-left: 2%;
  flex-grow: 1;
  flex-flow: row nowrap;
  align-items: center;
  display: flex;
  background-color: rgb(247, 248, 249);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  color: #646464;
  input {
    padding: 5px;
    background-color: rgb(247, 248, 249);
    width: 100%;
    border: 0;
    color: #212121;
    font-size: 18px;
    outline: 0;
  }
  .fa-xmark {
    cursor: pointer;
    padding: 4px;
  }

  .fa-magnifying-glass {
    width: 20px;
  }

  &.focusedInput {
    outline: 3px solid #ff9100;
  }
`;
