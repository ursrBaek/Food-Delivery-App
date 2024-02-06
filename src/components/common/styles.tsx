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

interface prevButtonProps {
  isAbsolutePosition?: boolean;
}

export const StyledPrevButton = styled.button<prevButtonProps>`
  cursor: pointer;
  position: ${(props: prevButtonProps) => props.isAbsolutePosition && 'absolute'};
  top: 10px;
  left: 10px;
  font-size: 40px;
  width: 47px;
  color: #333;
  border: none;
  background-color: inherit;
  &:hover {
    color: #d15c03;
  }
`;

export const StyledHeader = styled.header`
  top: 0;
  padding: 15px 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgb(192, 192, 192);
  background-color: #fff;

  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    font-family: 'hanna';
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #d15c03;
    opacity: 1;
    transition: all 0.1s ease-in-out;
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
          color: #b19986;
          font-size: 30px;
          line-height: 40px;
          vertical-align: bottom;

          &.select {
            color: #d15c03;
          }
        }
        span {
          font-family: 'jua';
          color: #b19986;
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
