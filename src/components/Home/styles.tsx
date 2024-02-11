import styled from 'styled-components';
import spicyImage from '../../assets/images/spicyImage.png';
import hotImage from '../../assets/images/hotImage.png';
import coolImage from '../../assets/images/coolImage.png';
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
  font-size: 19px;
  font-family: 'hanna';
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 3% 2.5%;
  justify-content: space-between;

  li {
    width: 20%;
    text-align: center;
    a {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding-bottom: 10px;
      font-size: 16px;
      img {
        width: 78%;
        background-color: #fff3e0;
        border-radius: 50%;
        padding: 3px;
        transition: all ease-out 0.3s;
        margin-bottom: 3px;
      }
    }

    &:hover img {
      transform: rotate(20deg);
      background-color: #ffb742;
    }
  }
`;

export const MenuRecommendationSection = styled.section`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 2.5%;
  margin-bottom: 2.5%;
  a {
    background-image: url(${coolImage});
    background-size: cover;
    border-radius: 5px;
    width: 32%;
    padding: 3%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    writing-mode: vertical-lr;
    font-size: 30px;
    color: #ffffff;
    opacity: 0.9;
    text-shadow: 0px 0px 7px #000000;
  }
  a:first-child {
    background-image: url(${spicyImage});
  }
  a:nth-child(2) {
    background-image: url(${hotImage});
  }
  a:last-child {
    background-image: url(${coolImage});
  }
`;
