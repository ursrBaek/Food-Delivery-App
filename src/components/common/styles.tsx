import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  position: relative;
  margin: 0 auto;
  min-width: 320px;
  max-width: 430px;
  height: 100vh;
  box-shadow: 0 9px 15px -3px rgb(0 0 0 / 30%);
  font-family: 'hanna';
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledPrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 20px;
  left: 20px;
  font-size: 40px;
  color: #333;
  border: none;
  background-color: inherit;
  &:hover {
    color: #d15c03;
  }
`;

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 1;
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
    width: 350px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #d15c03;
    opacity: 1;
    transition: all 0.1s ease-in-out;
  }
`;
