import styled from 'styled-components';

export const AuthTemplateBox = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  img {
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 160px;
  }
  form {
    width: 80%;
    margin: 35px auto;
    .input-box {
      width: 100%;
      position: relative;
      margin-bottom: 28px;
      &:last-of-type {
        margin-bottom: 30px;
      }

      input {
        display: inline-block;
        width: 100%;
        padding: 10px;
        border: 0;
        border-bottom: 2px solid #aaa;
        font-size: 17px;
        outline-style: none;
        &:focus-visible {
          border-bottom: 2px solid #d15c03;
        }
      }
    }
  }
  .join,
  .home {
    font-family: 'hanna';
    text-align: center;
    width: 320px;
    margin: 10px auto;
    font-size: 20px;
    a {
      color: #d15c03;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const AuthButton = styled.button`
  font-family: 'hanna';
  width: 100%;
  height: 40px;
  margin: 10px 0 15px 0;
  border: 0;
  background-color: #d15c03;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;

  &:hover {
    background-color: #e99400;
  }
`;
