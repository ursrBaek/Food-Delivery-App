import styled from 'styled-components';

export const StyledListItem = styled.li`
  padding: 5%;
  background-color: #fff;
  margin-bottom: 10px;
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: column;
  .dateAndDetailBtn {
    display: flex;
    justify-content: space-between;
    color: #747474;
    .viewDetailBtn {
      font-size: 15px;
      color: #868686;
      border: 1px solid #adadad;
      padding: 3px 7px;
      border-radius: 15px;
      &:hover {
        color: #000;
        border: 1px solid #000;
      }
    }
  }

  .orderInfo {
    display: flex;
    align-items: center;
    margin-bottom: 2%;
    img {
      border: 1px solid #e7e7e7;
      margin-right: 12px;
      width: 70px;
      height: 70px;
      object-fit: contain;
      background-color: #ffd497;
      border-radius: 15px;
      background-color: #fff;
    }
    div {
      p {
        margin: 5px;
        &.storeName {
          font-size: 18px;
          word-break: keep-all;
        }
        &.orderMenu {
          font-size: 14px;
          color: #555;
        }
        &.orderPrice {
          color: #555;
          font-size: 15px;
        }
      }
    }
  }

  .AddToOrderBtn,
  .reviewBtn {
    font-size: 17px;
    font-weight: 600;
    border: 1px solid #454545;
    color: #444;
    border-radius: 3px;
    padding: 2% 4%;
    margin-bottom: 2%;

    span {
      color: #999;
    }
  }

  .reviewBtn {
    &.disabled {
      border-color: #cbcbcb;
      color: #cbcbcb;
    }
  }
`;
