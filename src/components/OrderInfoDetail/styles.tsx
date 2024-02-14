import styled from 'styled-components';

export const OrderInfoBox = styled.div`
  flex-grow: 1;
  overflow: auto;
  background-color: #e4e4e4;

  & > div {
    margin: 2% 0;
    background-color: #fff;
    border-bottom: 1px solid #bebebe;
    padding: 3%;
  }

  .storeInfo {
    p {
      margin: 15px 0;
    }
    .order-completed-msg {
      font-family: 'jua';
      color: #d15c03;
      font-size: 19px;
    }
    .store-name {
      font-family: 'dohyeon';
      font-size: 25px;
    }
    .order-sum {
      font-size: 20px;
    }

    .order-date,
    .order-id {
      color: #888;
    }

    a {
      text-align: center;
      font-family: 'sans-serif;';
      display: block;
      font-size: 17px;
      font-weight: 600;
      border: 1px solid #5d5d5d;
      color: #444;
      border-radius: 3px;
      padding: 3% 5%;
      margin-bottom: 2%;
      .fa-store {
        display: inline-block;
        width: 17px;
        margin-right: 5px;
      }
    }
  }

  h2 {
    font-family: 'jua';
    padding: 2% 3%;
    border-bottom: 2px solid #eee;
    font-size: 20px;
  }

  ul {
    font-family: 'yeonsung';
    /* padding: 15px 30px; */
    .order-list {
      font-size: 20px;
      border-bottom: 2px solid #eee;
      div {
        padding-right: 20px;
        text-align: right;
        margin: 10px 0;
      }
      .menu-name {
        text-align: left;
        font-size: 23px;
      }
    }
  }

  .totalAmountContainer {
    margin: 0;
    .bill > div {
      padding: 0 3%;
      display: flex;
      justify-content: space-between;
      margin: 3% 0;
    }
    .totalOrderedPrice {
      font-family: 'hannaPro';
      font-size: 25px;
      padding: 2% 3%;
      display: flex;
      justify-content: space-between;

      .priceTitle {
        color: #d15c03;
      }
    }
  }
`;
