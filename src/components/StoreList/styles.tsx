import styled from 'styled-components';

export const StyledContainer = styled.ul`
  font-family: 'jua';
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  overflow: auto;
  padding-top: 15px;
  li a {
    color: #323232;
    display: flex;
    padding: 15px 15px;
    border-bottom: 1px solid rgb(192, 192, 192);
    img {
      margin-right: 15px;
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 15px;
      background-color: #fff;
      border: 1px solid #e7e7e7;
    }
    .store-description {
      p {
        margin-bottom: 5px;
        i {
          margin-right: 5px;
        }
      }
      .store-name {
        font-size: 19px;
      }
    }
    transition: all ease-out 0.25s;
    &:hover {
      background-color: #fff3e0;
    }
  }
`;
