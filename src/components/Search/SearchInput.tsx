import React, { useRef, useState } from 'react';
import { StyledInputBox } from './styles';

export default function SearchInput() {
  const [inputText, setInputText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const resetInput = () => {
    setInputText('');
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
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      {inputText && <i className="fa-solid fa-xmark" onClick={resetInput}></i>}
    </StyledInputBox>
  );
}
