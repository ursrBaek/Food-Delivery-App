import styled from 'styled-components';
import fullStar from '../../assets/images/fullStar.png';
import emptyStar from '../../assets/images/emptyStar.png';
import reviewBackground from '../../assets/images/reviewBackground.jpg';

export const ReviewWrapper = styled.div`
  padding: 15% 10% 10%;
  flex-grow: 1;
  background-color: #fff;
  background-image: url(${reviewBackground});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: 105%;
  h1 {
    font-size: 20px;
    font-family: 'jua';
    margin: 30px auto 10px auto;
  }
  .q-text {
    font-family: 'hanna';
    font-size: 35px;
    margin: 10px auto;
    text-align: center;
    word-break: keep-all;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 20px auto;
    width: 100%;
    li {
      width: 45px;
      height: 45px;
      background-size: cover;
      cursor: pointer;
    }
    .empty-star {
      background-image: url(${emptyStar});
    }
    .full-star {
      background-image: url(${fullStar});
    }
  }

  textarea {
    font-size: 18px;
    height: 170px;
    display: block;
    width: 100%;
    resize: none;
    padding: 5px;
  }
  .number-of-letters {
    font-size: 17px;
    margin: 10px auto;
    text-align: right;
  }
  .wrap-btn {
    margin: 30px auto;
    button {
      font-family: 'hanna';
      width: 150px;
      height: 40px;
      float: right;
      border: 0;
      border-radius: 3px;
      background-color: #d15c03;
      color: #fff;
      font-size: 20px;

      &:hover {
        background-color: #e99400;
      }

      &[disabled] {
        background-color: #9a9a9a;
        cursor: auto;
      }
    }
  }
`;
