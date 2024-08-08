import styled from 'styled-components';
import emptyImage from '../../assets/images/empty-img.png';
import deleteIcon from '../../assets/images/x-icon.png';

export const StyledOrderStoreInfoBox = styled.div`
  margin: 7px 0;
  padding-top: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  text-indent: 15px;
  .store-name {
    font-family: 'dohyeon';
    font-size: 19px;
    padding: 17px 0;
    border-bottom: 1px solid #ddd;
  }
  .delivery-msg {
    padding: 10px 0;
    p {
      margin: 5px 0;
      &:last-child {
        color: #777;
      }
    }
  }
`;

export const StyledOrderListItem = styled.li`
  background-color: #fff;
  padding: 15px;
  border-bottom: 2px solid #ddd;
  /* height: 100px; */
  /* position: relative; */
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 7px 0;
  img {
    border: 1px solid #bbb;
    border-radius: 8%;
    width: 30%;
  }
  .menu-info {
    flex-grow: 1;
    font-size: 18px;
    word-break: keep-all;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    margin-left: 5%;
    .counter {
      align-self: flex-end;
      width: 100px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      font-family: 'jua';
      .plus-btn,
      .minus-btn,
      .count {
        width: 40px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .plus-btn,
      .minus-btn {
        cursor: pointer;
      }
    }
  }
  .delete-btn {
    padding: 5px;
    width: 43px;
    height: 43px;
    background-image: url(${deleteIcon});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

export const StyledTotalOrderAmount = styled.div`
  font-family: 'dohyeon';
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: #fff;
  margin: 10px 0;
  border-bottom: 2px solid #ddd;
  .order-price {
    margin-right: 10px;
  }
`;

export const StyledFoodMessageBox = styled.div`
  font-size: 13px;
  color: #999;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  word-break: keep-all;
  p {
    margin: 2px;
  }
`;

export const StyledOrderButton = styled.button`
  position: sticky;
  bottom: 15px;
  width: 90%;
  margin: 10px auto;
  padding: 7px 0;
  font-size: 19px;
  border-radius: 4px;
  background-color: #d15c03;
  color: #fff;
  font-family: 'dohyeon';
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  span {
    padding: 3px 0;
  }
  .order-price {
    margin-right: 10px;
  }

  &:hover {
    background-color: #f07415;
  }

  i {
    margin-right: 10px;
    margin-bottom: 3px;
  }
`;

export const EmptyContainer = styled.div`
  .emptyImg {
    background-image: url(${emptyImage});
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center 140%;
    height: 50vh;
  }
  p {
    font-family: 'hannaPro';
    font-size: 25px;
    text-align: center;
    color: #545454;
  }
`;

export const MessageComp = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(75, 75, 75, 0.8);
  color: #fff;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  span {
    font-size: 70px;
  }
  p {
    margin-top: 20px;
    font-size: 26px;
  }
`;
