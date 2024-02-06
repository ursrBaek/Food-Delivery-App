import React from 'react';
import { Link } from 'react-router-dom';
import { MenuRecommendationSection } from './styles';

function MenuRecommendations() {
  return (
    <MenuRecommendationSection>
      <Link to="/store/spicy">
        <p>매콤한게</p>
        <p>땡긴다</p>
      </Link>

      <Link to="/store/hot">
        <p>따뜻한게</p>
        <p>땡긴다</p>
      </Link>
      <Link to="/store/cool">
        <p>시원한게</p>
        <p>땡긴다</p>
      </Link>
    </MenuRecommendationSection>
  );
}

export default MenuRecommendations;
