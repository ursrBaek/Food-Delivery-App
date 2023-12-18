import React from 'react';
import { Link } from 'react-router-dom';
import chicken from '../../assets/images/categories/chicken.png';
import chineseFood from '../../assets/images/categories/chineseFood.png';
import dessert from '../../assets/images/categories/dessert.png';
import dish from '../../assets/images/categories/dish.png';
import fastFood from '../../assets/images/categories/fastFood.png';
import japaneseFood from '../../assets/images/categories/japaneseFood.png';
import koreanFood from '../../assets/images/categories/koreanFood.png';
import pizza from '../../assets/images/categories/pizza.png';
import schoolFood from '../../assets/images/categories/schoolFood.png';
import { CategoryList } from './styles';

export default function CategoryMenu() {
  return (
    <CategoryList>
      <li>
        <Link to="/store/koreanFood">
          <img src={koreanFood} alt="한식 이미지 아이콘" />
          한식
        </Link>
      </li>
      <li>
        <Link to="/store/chineseFood">
          <img src={chineseFood} alt="중식 이미지 아이콘" />
          중식
        </Link>
      </li>
      <li>
        <Link to="/store/japaneseFood">
          <img src={japaneseFood} alt="일식 이미지 아이콘" />
          일식
        </Link>
      </li>
      <li>
        <Link to="/store/fastFood">
          <img src={fastFood} alt="패스트푸드 이미지 아이콘" />
          패스트푸드
        </Link>
      </li>
      <li>
        <Link to="/store/dessert">
          <img src={dessert} alt="디저트 이미지 아이콘" />
          디저트
        </Link>
      </li>
      <li>
        <Link to="/store/chicken">
          <img src={chicken} alt="치킨 이미지 아이콘" />
          치킨
        </Link>
      </li>
      <li>
        <Link to="/store/pizza">
          <img src={pizza} alt="피자 이미지 아이콘" />
          피자
        </Link>
      </li>
      <li>
        <Link to="/store/schoolFood">
          <img src={schoolFood} alt="분식 이미지 아이콘" />
          분식
        </Link>
      </li>
      <li>
        <Link to="/store/dish">
          <img src={dish} alt="안주 이미지 아이콘" />
          안주
        </Link>
      </li>
    </CategoryList>
  );
}
