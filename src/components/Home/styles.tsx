import styled from 'styled-components';
import spicyImage from '../../assets/images/spicyImage.png';
import hotImage from '../../assets/images/hotImage.png';
import coolImage from '../../assets/images/coolImage.png';
import orangePaper from '../../assets/images/orangePaper.jpg';
export const MainBox = styled.main`
  padding-top: 15px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
  overflow: auto;
  background-color: #f2f2f2;
`;

interface SectionProps {
  $idx: number;
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
    background-color: #ddd;
    .bannerItemContainer {
      width: auto;
      display: flex;
      transform: translateX(${(props: SectionProps) => `calc(${(props.$idx + 1) * 100}% * -1)`});
      img {
        display: inline-block;
        width: 100%;
        min-width: 100%;
        height: auto;
        aspect-ratio: 675 / 315;
        object-fit: cover;
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
  background-image: url(${orangePaper});
  background-size: cover;
  color: #ffffff;
  font-size: 19px;
  font-family: 'hanna';
  background-color: #ddd;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 3% 2.5%;
  margin: 4% 2.5%;
  border-radius: 7px;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: 0 2px 10px -3px rgb(0 0 0 / 30%);

  li {
    width: 20%;
    text-align: center;
    a {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding-bottom: 10px;
      font-size: 14px;
      color: #333;
      img {
        width: 78%;
        background-color: #fff3e0;
        border-radius: 30%;
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
  max-height: 300px;
  padding: 0 2.5%;
  margin-bottom: 2.5%;
  div {
    background-color: #ddd;
    display: inline-block;
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
  div:first-child {
    background-image: url(${spicyImage});
  }
  div:nth-child(2) {
    background-image: url(${hotImage});
  }
  div:last-child {
    background-image: url(${coolImage});
  }
`;
