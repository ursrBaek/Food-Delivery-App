import styled from 'styled-components';
import spicyImage from '../../assets/images/spicyImage.jpg';
import hotImage from '../../assets/images/hotImage.jpg';
import coolImage from '../../assets/images/coolImage.jpg';
import spicyImage_p from '../../assets/images/spicyImage_p.webp';
import hotImage_p from '../../assets/images/hotImage_p.webp';
import coolImage_p from '../../assets/images/coolImage_p.webp';
import orangePaper from '../../assets/images/orangePaper.jpg';
import orangePaper_p from '../../assets/images/orangePaper_p.webp';
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
      display: flex;
      transform: translateX(${(props: SectionProps) => `calc(${(props.$idx + 1) * 100}% * -1)`});
      picture {
        width: 100%;
        img {
          display: block;
          aspect-ratio: 409 / 191;
          object-fit: cover;
          @media (min-width: 430px) {
            width: 409px;
          }
        }
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

  @supports (background-image: url(${orangePaper_p})) {
    background-image: url(${orangePaper_p});
  }
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
  width: 95%;

  li {
    width: 20%;
    text-align: center;
    a {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding-bottom: 10px;
      font-size: 14px;
      color: #333;
      img {
        width: 78%;
        aspect-ratio: 1/1;
        background-color: #fff3e0;
        border-radius: 30%;
        padding: 3px;
        transition: all ease-out 0.3s;
        margin-bottom: 3px;

        @media (min-width: 430px) {
          width: 61px;
        }
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
  div {
    background-color: #ddd;
    display: inline-block;
    background-image: url(${coolImage});
    background-size: cover;
    border-radius: 5px;
    width: 32%;
    height: 146px;
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

  @supports (background-image: url(${spicyImage_p})) {
    div:first-child {
      background-image: url(${spicyImage_p});
    }

    div:nth-child(2) {
      background-image: url(${hotImage_p});
    }

    div:last-child {
      background-image: url(${coolImage_p});
    }
  }
`;
