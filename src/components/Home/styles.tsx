import styled from 'styled-components';

export const MainBox = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
  overflow: auto;
`;

interface SectionProps {
  idx: number;
}

export const StyledSection = styled.section<SectionProps>`
  margin-top: 2.5%;
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
      transform: translateX(${(props: SectionProps) => `calc(${(props.idx + 1) * 100}% * -1)`});
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
      border: none;
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

      &:hover {
        border: 2px solid #d5f9ff;
      }
    }
  }
`;

export const AddSection = styled.section`
  margin: 2.5% 2.5% 0 2.5%;
  padding: 20px;
  text-align: center;
  border-radius: 7px;
  background-color: #fb2728;
  color: #ffffff;
  font-size: 25px;
  font-family: 'hanna';
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 2.5%;
  justify-content: space-between;

  li {
    width: 49%;
    text-align: center;
    border-radius: 20px;
    opacity: 0.9;
    margin-bottom: 2%;
    background-color: #fff3e0;
    a {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      font-size: 20px;
      img {
        width: 55%;
        transition: all ease-out 0.3s;
      }
    }

    &:hover {
      background-color: #ffab3c;
      opacity: 1;
      img {
        opacity: 1;
        transform: rotate(20deg);
      }
    }
  }
`;
