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
import chicken_avif from '../../assets/images/categories/chicken_avif.avif';
import chineseFood_avif from '../../assets/images/categories/chineseFood_avif.avif';
import dessert_avif from '../../assets/images/categories/dessert_avif.avif';
import dish_avif from '../../assets/images/categories/dish_avif.avif';
import fastFood_avif from '../../assets/images/categories/fastFood_avif.avif';
import japaneseFood_avif from '../../assets/images/categories/japaneseFood_avif.avif';
import koreanFood_avif from '../../assets/images/categories/koreanFood_avif.avif';
import pizza_avif from '../../assets/images/categories/pizza_avif.avif';
import schoolFood_avif from '../../assets/images/categories/schoolFood_avif.avif';
import salad_avif from '../../assets/images/categories/salad_avif.avif';
import { CategoryList } from './styles';
import CategoryItem from './CategoryItem';

const categories = [
  { name: '한식', path: 'koreanFood', img: koreanFood, avif: koreanFood_avif, alt: '한식 이미지 아이콘' },
  { name: '중식', path: 'chineseFood', img: chineseFood, avif: chineseFood_avif, alt: '중식 이미지 아이콘' },
  { name: '일식', path: 'japaneseFood', img: japaneseFood, avif: japaneseFood_avif, alt: '일식 이미지 아이콘' },
  { name: '패스트푸드', path: 'fastFood', img: fastFood, avif: fastFood_avif, alt: '패스트푸드 이미지 아이콘' },
  { name: '디저트', path: 'dessert', img: dessert, avif: dessert_avif, alt: '디저트 이미지 아이콘' },
  { name: '치킨', path: 'chicken', img: chicken, avif: chicken_avif, alt: '치킨 이미지 아이콘' },
  { name: '피자', path: 'pizza', img: pizza, avif: pizza_avif, alt: '피자 이미지 아이콘' },
  { name: '분식', path: 'schoolFood', img: schoolFood, avif: schoolFood_avif, alt: '분식 이미지 아이콘' },
  { name: '안주', path: 'dish', img: dish, avif: dish_avif, alt: '안주 이미지 아이콘' },
  { name: '샐러드', path: 'salad', img: salad, avif: salad_avif, alt: '샐러드 이미지 아이콘' },
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
