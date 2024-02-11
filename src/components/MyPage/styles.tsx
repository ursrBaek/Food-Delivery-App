import styled from 'styled-components';

export const MyPageContainer = styled.div`
  flex-grow: 1;
  background-color: #f1f1f1;
  position: relative;
  .speaker {
    margin: 15px auto;
    width: 89%;
    color: #4a4a4a;
    font-family: hannaAir;
  }
  .rule {
    font-family: jua;
    color: #606060;
    width: 93%;
    margin: 20px auto;
    p {
      margin: 3%;
      span {
        font-size: 20px;
      }
    }
  }

  .logout {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 10px;
    color: #4a4a4a;
    font-size: 18px;
    font-family: jua;
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  width: 93%;
  border-radius: 10px;
  margin: 10px auto;

  .countInfo {
    width: 100%;
    border-top: 1px solid #ddd;
    text-align: center;
    margin-top: 5%;
    padding-top: 5%;
    color: #4a4a4a;
    font-family: hannaAir;
    span {
      font-family: hanna;
    }
  }
`;

export const UserRankInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;
  .medal {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f6e3c2;
    padding: 10px;
    font-size: 40px;
    margin-right: 5%;
    /* margin-left: 13%; */
  }
  p {
    display: flex;
    flex-flow: row wrap;
    font-size: 18px;
    .rank {
      font-family: hannaAir;
      margin-right: 5px;
    }
    .nickname {
      padding-bottom: 5px;
      font-family: hannaPro;
    }
  }
`;

export const UserDashboard = styled.div`
  /* background-color: pink; */
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    text-align: center;
    i {
      font-size: 25px;
      margin-bottom: 10px;
      text-shadow: 0px 0px 3px #a1a1a1;

      &.fa-file-lines {
        color: #242424;
      }
      &.fa-heart {
        color: #ff3b00;
      }
      &.fa-comment-dots {
        color: #005ac7;
      }
    }
    span {
      display: block;
    }
  }
`;
