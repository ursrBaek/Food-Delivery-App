import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  min-width: 280px;
  max-width: 430px;
  height: 100vh;
  box-shadow: 0 9px 15px -3px rgb(0 0 0 / 30%);
  font-family: 'hanna';
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const StyledPrevButton = styled.button`
  cursor: pointer;

  font-size: 35px;
  width: 47px;
  color: #333;
  border: none;

  &.absolutePosition {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  &:hover {
    color: #ffffff;
  }

  &.whiteBg:hover {
    color: #ff6e00;
  }
`;

export const StyledHeader = styled.header`
  top: 0;
  padding: 16px 0 13px 0;
  background-color: #eb9111;
  position: relative;

  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 27px;
    font-family: 'hanna';
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* color: #d15c03; */
    color: #fff;
    opacity: 1;
    transition: all 0.1s ease-in-out;

    &.hide {
      opacity: 0;
    }
  }

  div {
    z-index: 900;
    position: absolute;
    bottom: -19px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #c76a12;
    span {
      flex: 1;
      height: 19px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      box-shadow: 0 3px 5px -3px rgb(0 0 0 / 30%);
    }

    span:nth-child(odd) {
      background-color: #ec3b00;
    }

    span:nth-child(even) {
      background-color: #ffd900;
    }
  }
`;

export const MenuWrapper = styled.div`
  border-top: 2px solid #d1d1d1;
  background-color: #fff;
  padding: 10px 0 15px 0;
  ul {
    display: flex;
    li {
      flex: 1 1 0;

      a {
        display: inline-block;
        text-align: center;
        width: 100%;
        .icon {
          width: 100%;
          /* color: #b19986; */
          color: #a6a6a6;
          font-size: 25px;
          line-height: 40px;
          vertical-align: bottom;

          &.select,
          &.select + span {
            color: #d15c03;
          }
        }
        span {
          font-family: 'jua';
          /* color: #b19986; */
          color: #a6a6a6;
          font-size: 14px;
        }
        &:hover {
          .icon,
          span {
            color: #d15c03;
          }
        }
      }
    }
  }
`;

export const GrayWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: #eee;
  padding-top: 10px;
`;

interface IsError {
  $error?: string;
}

export const Message = styled.p<IsError>`
  width: 90%;
  margin: 0 auto;
  word-break: break-all;
  font-size: 25px;
  text-align: center;
  padding: 100px 0;
  color: ${(props: IsError) => (props.$error ? 'red' : '#333')};

  a {
    display: inline-block;
    padding: 8px 20px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 20px;
    color: #ab4a00;
    border: 1px solid #ab4a00;
    &:hover {
      color: #fff;
      background-color: #ab4a00;
    }
  }
`;
