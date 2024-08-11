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

export const SearchContentsContainer = styled.div`
  padding: 2.5%;
  overflow: auto;
  flex-grow: 1;

  h2 {
    color: rgb(72, 72, 72);
    font-size: 20px;
    padding: 32px 0px 16px;
    border-bottom: 1px solid rgb(201, 205, 210);
    margin-bottom: 2.5%;
  }
  .infoMsg,
  .error {
    margin-top: 30px;
    font-size: 20px;
    text-align: center;
  }
  .infoMsg {
    color: rgb(45, 45, 45);
  }
  .error {
    color: rgb(124, 32, 32);
  }

  ul {
    li {
      margin-bottom: 2.5%;

      a {
        display: flex;
        img {
          border-radius: 20%;
          width: 50px;
          height: 50px;
          object-fit: cover;
          margin-right: 3.5%;
        }
        .info {
          flex-grow: 1;
          .storeName {
            font-size: 20px;
            margin-bottom: 6px;
            color: #404040;
          }
          .category {
            font-size: 15px;
            color: #8b8b8b;
          }
        }
        i {
          width: 39px;
          color: #8b8b8b;
          padding: 10px;
          align-self: center;
          font-size: 25px;
          &:hover {
            color: #e08e00;
          }
        }
      }
    }
  }
`;
