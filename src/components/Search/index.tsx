import PrevButton from 'components/common/PrevButton';
import SearchInput from './SearchInput';
import { SearchContainer, SearchContentsContainer } from './styles';
import SearchResults from './SearchResults';
import RecentStores from './RecentStores';
import { useState } from 'react';
import { useUserId } from 'store';

export default function Index() {
  const [searchText, setSearchText] = useState('');
  const userId = useUserId();

  return (
    <>
      <SearchContainer>
        <PrevButton />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </SearchContainer>
      <SearchContentsContainer>
        <SearchContentsContainer>{searchText ? <SearchResults searchText={searchText} /> : <RecentStores />}</SearchContentsContainer>
        {/* <SearchContentsContainer>
          {!searchText && userId ? <RecentStores /> : <SearchResults searchText={searchText} />}
        </SearchContentsContainer> */}
      </SearchContentsContainer>
    </>
  );
}
