import { StoreDetailInfo } from 'types/responseTypes';
import MenuItem from './MenuItem';
import { MenuBox, OrderButton } from './styles';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function MenuList({ storeDetailInfo }: Props) {
  return (
    <>
      <MenuBox>
        {storeDetailInfo.menu.map((menu) => (
          <MenuItem menu={menu} />
        ))}
      </MenuBox>
      <OrderButton>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default MenuList;
