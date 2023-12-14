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
