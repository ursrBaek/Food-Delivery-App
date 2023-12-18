import styled from 'styled-components';

export const MainBox = styled.main`
  margin-top: 2.5%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
`;

export const StyledSection = styled.section`
  width: 100%;
  .carouselWrap {
    width: 95%;
    margin: 0 auto;
    border-radius: 7px;
    position: relative;
    overflow: hidden;
    .bannerItemContainer {
      width: auto;
      display: flex;
      img {
        display: inline-block;
        width: 100%;
      }

      &.onAnimate {
        transition-duration: 0.5s;
      }
    }
    .itemControl {
      width: 40px;
      padding-bottom: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(0, 0, 0, 0.685);
      font-size: 30px;
      color: #fff;
      position: absolute;
      top: 50%;
      &.prev {
        left: 0;
        transform: translateY(-50%);
      }
      &.next {
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
`;
