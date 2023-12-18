import React from 'react';
import { MainBox } from './styles';
import Banner from './Banner';
import CategoryMenu from './CategoryMenu';

export default function Main() {
  return (
    <MainBox>
      <Banner />
      <CategoryMenu />
    </MainBox>
  );
}
