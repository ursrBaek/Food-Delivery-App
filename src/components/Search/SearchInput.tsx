import React, { useRef, useState } from 'react';
import { StyledInputBox } from './styles';

interface Props {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ searchText, setSearchText }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const resetInput = () => {
    setSearchText('');
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <StyledInputBox className={isFocused ? 'focusedInput' : ''}>
      {!isFocused && <i className="fa-solid fa-magnifying-glass"></i>}
      <input
        placeholder="상호명을 입력하세요"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      {searchText && <i className="fa-solid fa-xmark" onClick={resetInput}></i>}
    </StyledInputBox>
  );
}
