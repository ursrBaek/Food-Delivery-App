import React from 'react';
import chicken from '../../assets/images/categories/chicken.png';
import chineseFood from '../../assets/images/categories/chineseFood.png';
import dessert from '../../assets/images/categories/dessert.png';
import dish from '../../assets/images/categories/dish.png';
import fastFood from '../../assets/images/categories/fastFood.png';
import japaneseFood from '../../assets/images/categories/japaneseFood.png';
import koreanFood from '../../assets/images/categories/koreanFood.png';
import pizza from '../../assets/images/categories/pizza.png';
import schoolFood from '../../assets/images/categories/schoolFood.png';
import salad from '../../assets/images/categories/salad.png';
import { CategoryList } from './styles';
import CategoryItem from './CategoryItem';

const categories = [
  { name: '한식', path: 'koreanFood', img: koreanFood, alt: '한식 이미지 아이콘' },
  { name: '중식', path: 'chineseFood', img: chineseFood, alt: '중식 이미지 아이콘' },
  { name: '일식', path: 'japaneseFood', img: japaneseFood, alt: '일식 이미지 아이콘' },
  { name: '패스트푸드', path: 'fastFood', img: fastFood, alt: '패스트푸드 이미지 아이콘' },
  { name: '디저트', path: 'dessert', img: dessert, alt: '디저트 이미지 아이콘' },
  { name: '치킨', path: 'chicken', img: chicken, alt: '치킨 이미지 아이콘' },
  { name: '피자', path: 'pizza', img: pizza, alt: '피자 이미지 아이콘' },
  { name: '분식', path: 'schoolFood', img: schoolFood, alt: '분식 이미지 아이콘' },
  { name: '안주', path: 'dish', img: dish, alt: '안주 이미지 아이콘' },
  { name: '샐러드', path: 'salad', img: salad, alt: '샐러드 이미지 아이콘' },
];

export default function CategoryMenu() {
  return (
    <CategoryList>
      {categories.map((category) => (
        <CategoryItem key={category.path} {...category} />
      ))}
    </CategoryList>
  );
}
