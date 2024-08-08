import { StoreDetailInfo } from 'types/responseTypes';
import MenuItem from './MenuItem';
import { MenuBox, OrderButton } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import useLoginCheck from 'hooks/useLoginCheck';
import { useOrderList, useUserId } from 'store';

interface Props {
  storeDetailInfo: StoreDetailInfo;
}

function MenuList({ storeDetailInfo }: Props) {
  const navigate = useNavigate();
  const userId = useUserId();
  const { storeId } = useParams();
  const orderList = useOrderList();

  const onClickButton = useLoginCheck(userId, () => {
    navigate(`/order/${storeId}`);
  });

  return (
    <>
      <MenuBox>
        {storeDetailInfo.menu.map((menu, idx) => (
          <MenuItem menu={menu} key={menu.foodName} idx={idx} checked={Boolean(orderList[idx]?.orderCount)} />
        ))}
      </MenuBox>
      <OrderButton onClick={onClickButton}>
        <span>주문</span>하기
      </OrderButton>
    </>
  );
}

export default MenuList;
