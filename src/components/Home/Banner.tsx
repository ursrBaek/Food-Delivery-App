import React from 'react';
import { StyledSection } from './styles';
import ad1 from '../../assets/images/bannerImages/ad1.jpg';
import ad27 from '../../assets/images/bannerImages/ad27.jpg';
import ad14 from '../../assets/images/bannerImages/ad14.jpg';
import ad16 from '../../assets/images/bannerImages/ad16.jpg';
import ad18 from '../../assets/images/bannerImages/ad18.jpg';

function Banner() {
  return (
    <StyledSection>
      <h2 className="a11y-hidden">광고 배너</h2>
      <div className="carouselWrap">
        <div className={`bannerItemContainer`}>
          <img src={ad18} alt="배너5" />
          <img src={ad1} alt="배너1" />
          <img src={ad27} alt="배너2" />
          <img src={ad14} alt="배너3" />
          <img src={ad16} alt="배너4" />
          <img src={ad18} alt="배너5" />
          <img src={ad1} alt="배너1" />
        </div>
        <button className="itemControl prev">&laquo;</button>
        <button className="itemControl next">&raquo;</button>
      </div>
    </StyledSection>
  );
}

export default Banner;
