import { AddSection, MainBox } from './styles';
import Banner from './Banner';
import CategoryMenu from './CategoryMenu';
import MenuRecommendations from './MenuRecommendations';

export default function Main() {
  return (
    <MainBox>
      <Banner />
      <AddSection>나라페이 결제 시 2천원 할인</AddSection>
      <CategoryMenu />
      <MenuRecommendations />
    </MainBox>
  );
}
