import PrevButton from 'components/common/PrevButton';
import SearchInput from './SearchInput';
import { SearchContainer, SearchContentsContainer } from './styles';
import SearchResults from './SearchResults';
import RecentStores from './RecentStores';
import { useState } from 'react';

export default function Index() {
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <SearchContainer>
        <PrevButton />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </SearchContainer>
      <SearchContentsContainer>
        <SearchContentsContainer>{searchText ? <SearchResults searchText={searchText} /> : <RecentStores />}</SearchContentsContainer>
      </SearchContentsContainer>
    </>
  );
}
