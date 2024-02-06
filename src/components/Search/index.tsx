import PrevButton from 'components/common/PrevButton';
import SearchInput from './SearchInput';
import { SearchContainer } from './styles';

export default function Index() {
  return (
    <>
      <SearchContainer>
        <PrevButton />
        <SearchInput />
      </SearchContainer>
    </>
  );
}
