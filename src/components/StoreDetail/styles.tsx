import styled from 'styled-components';

export const MainBox = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  position: relative;
`;

export const StyledInfoBox = styled.div`
  font-family: 'yeonsung';
  width: 90%;
  margin: 25px auto 40px auto;
  padding: 30px 0;
  text-align: center;
  box-shadow: 0 1px 7px rgb(104, 104, 104);
  color: #444;

  .store-name {
    word-break: keep-all;
    margin-bottom: 20px;
    font-size: 35px;
    font-weight: 900;
  }

  .store-info {
    color: #3c3c3c;
    font-size: 23px;
    margin: 15px auto;
  }
  button {
    font-family: 'yeonsung';
    font-size: 23px;
    cursor: pointer;
    .fa-heart {
      color: red;
    }
  }
`;

export const StyledStoreOrderInfoBox = styled.div`
  width: 90%;
  margin: 0 auto 40px;
  padding: 25px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 20px;
  font-family: 'yeonsung';

  p {
    color: #222;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      display: inline-block;
      width: 100px;
    }
  }
`;

export const StyledTab = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  button {
    flex-grow: 1;
    padding: 10px 0;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    border-right: 1px solid #222;
    font-size: 20px;
    font-weight: 900;
    color: rgb(192, 192, 192);

    &:last-child {
      border-right: 0;
    }

    &.selected {
      border-top: 3px solid #d15c03;
      border-bottom: 0;
      color: #964100;
    }
  }
`;

export const MenuBox = styled.div`
  font-family: 'yeonsung';
  width: 90%;
  margin: 0 auto;

  label {
    .menu-item {
      display: flex;
      padding: 15px 10px;
      border-bottom: 1px solid #000;
      input {
        width: 15px;
        height: 15px;
      }
      div {
        flex-grow: 1;
        .menu-name {
          margin-bottom: 15px;
          font-size: 25px;
        }
        .menu-price {
          font-size: 18px;
        }
      }
      img {
        width: 90px;
        height: 90px;
        border-radius: 5px;
        object-fit: cover;
      }
    }

    &:last-child > .menu-item:last-child {
      border-bottom: 0;
    }
  }
`;

export const OrderButton = styled.button`
  position: sticky;
  left: 75%;
  bottom: 15px;
  width: 75px;
  height: 75px;
  padding: 14px 0;
  background-color: #d15c03;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 900;
  color: #eee;

  span {
    display: block;
  }

  &:hover {
    background-color: #e99400;
  }
`;

export const ReviewInfoBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 20px 15px;
  border-bottom: 1px solid #000;
  font-family: 'yeonsung';
  span {
    flex-grow: 1;
    padding-top: 5px;
    font-size: 20px;
    span {
      display: inline-block;
      margin-right: 10px;
    }
  }
`;

export const ReviewItemBox = styled.div`
  padding: 15px;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #000;
  font-family: 'yeonsung';

  &:last-child {
    border-bottom: 0;
  }
  .review-nick {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .review-date {
    margin-bottom: 10px;
    span {
      margin-right: 20px;
    }
  }
  .review-txt {
    font-size: 19px;
    line-height: 1.4;
  }
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 20px;
  padding: 20px 0;
`;

export const Empty = styled.p`
  text-align: center;
  font-size: 20px;
  color: #444;
  padding: 20px 0;
`;
