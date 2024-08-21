import React, { useEffect, useState } from 'react';
import { StyledSection } from './styles';
import ad1 from '../../assets/images/bannerImages/ad1.jpg';
import ad27 from '../../assets/images/bannerImages/ad27.jpg';
import ad14 from '../../assets/images/bannerImages/ad14.jpg';
import ad16 from '../../assets/images/bannerImages/ad16.jpg';
import ad18 from '../../assets/images/bannerImages/ad18.jpg';
import ad1p from '../../assets/images/bannerImages/ad1p.webp';
import ad27p from '../../assets/images/bannerImages/ad27p.webp';
import ad14p from '../../assets/images/bannerImages/ad14p.webp';
import ad16p from '../../assets/images/bannerImages/ad16p.webp';
import ad18p from '../../assets/images/bannerImages/ad18p.webp';
import useThrottle from 'hooks/useThrottle';

const banners = [
  { name: '배너5', img: ad18, webp: ad18p, alt: '배너5' },
  { name: '배너1', img: ad1, webp: ad1p, alt: '배너1' },
  { name: '배너2', img: ad27, webp: ad27p, alt: '배너2' },
  { name: '배너3', img: ad14, webp: ad14p, alt: '배너3' },
  { name: '배너4', img: ad16, webp: ad16p, alt: '배너4' },
  { name: '배너5', img: ad18, webp: ad18p, alt: '배너5' },
  { name: '배너1', img: ad1, webp: ad1p, alt: '배너1' },
];

function Banner() {
  const [idx, setIdx] = useState(0);
  const [onAnimate, setOnAnimate] = useState(true);

  const onClickNext = useThrottle(() => {
    setIdx((state) => {
      if (state > -1 && state < 5) {
        setOnAnimate(true);
      }
      return state + 1;
    });
  }, 500);

  const onClickPrev = useThrottle(() => {
    setIdx((state) => {
      if (state > -1 && state < 5) {
        setOnAnimate(true);
      }
      return state - 1;
    });
  }, 500);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (idx === 5) {
      timerId = setTimeout(() => {
        setIdx(() => {
          setOnAnimate(false);
          return 0;
        });
      }, 500);
    } else if (idx === -1) {
      timerId = setTimeout(() => {
        setOnAnimate(false);
        setIdx(4);
      }, 500);
    }

    const intervalId = setInterval(() => {
      setIdx((state) => {
        setOnAnimate(true);
        return state + 1;
      });
    }, 3500);

    return () => {
      clearTimeout(timerId);
      clearInterval(intervalId);
    };
  }, [idx]);
  return (
    <StyledSection $idx={idx}>
      <h2 className="a11y-hidden">광고 배너</h2>
      <div className="carouselWrap">
        <div className={`bannerItemContainer ${onAnimate ? 'onAnimate' : ''}`}>
          {banners.map((banner, i) => (
            <picture key={i}>
              <source srcSet={banner.webp} type="image/webp" />
              <img src={banner.img} alt={banner.alt} />
            </picture>
          ))}
        </div>
        <button className="itemControl prev" onClick={onClickPrev}>
          &laquo;
        </button>
        <button className="itemControl next" onClick={onClickNext}>
          &raquo;
        </button>
      </div>
    </StyledSection>
  );
}

export default Banner;
