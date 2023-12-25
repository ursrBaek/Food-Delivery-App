import MenuItem from './MenuItem';
import { MenuBox, OrderButton } from './styles';

function MenuList() {
  return (
    <>
      <MenuBox>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuBox>
      <OrderButton>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default MenuList;
