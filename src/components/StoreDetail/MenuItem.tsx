import React from 'react';
import { IMenuItem } from 'types/responseTypes';

interface Props {
  menu: IMenuItem;
}

function MenuItem({ menu }: Props) {
  return (
    <label htmlFor={menu.foodName}>
      <div className="menu-item">
        <input type="checkbox" readOnly id={menu.foodName} />
        <div>
          <p className="menu-name">{menu.foodName}</p>
          <p className="menu-price">{menu.foodPrice.toLocaleString()}원</p>
        </div>
        <img src={require(`../../assets/images/menuImages/${menu.foodImage}`)} alt={menu.foodImage} />
      </div>
    </label>
  );
}

export default MenuItem;
