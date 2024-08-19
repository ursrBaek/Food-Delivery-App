import React from 'react';
import { useOrderListAction } from 'store';
import { IMenuItem } from 'types/responseTypes';

interface Props {
  menu: IMenuItem;
  key: string;
  idx: number;
  checked: boolean;
}

function MenuItem({ menu, idx, checked }: Props) {
  const { addMenu, deleteMenu } = useOrderListAction();

  const clickMenu = () => {
    if (checked) {
      deleteMenu(idx);
    } else {
      addMenu(idx, { ...menu, orderCount: 1 });
    }
  };

  return (
    <label htmlFor={menu.foodName} id={idx.toString()}>
      <div className="menu-item">
        <input type="checkbox" readOnly id={menu.foodName} checked={checked} onClick={clickMenu} />
        <div>
          <p className="menu-name">{menu.foodName}</p>
          <p className="menu-price">{menu.foodPrice.toLocaleString()}원</p>
        </div>
        <img src={require(`../../assets/images/menuImages/${menu.foodImage}`)} alt={menu.foodImage} />
      </div>
    </label>
  );
}

export default React.memo(MenuItem);
