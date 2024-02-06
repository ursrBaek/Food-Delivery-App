import React from 'react';
import AuthTemplate from '../AuthTemplate';
import { AuthButton } from '../AuthTemplate/styles';
import PrevButton from 'components/common/PrevButton';

function SignUp() {
  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <div className="input-box">
            <input type="email" autoComplete="off" placeholder="이메일" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" minLength={6} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호 확인" />
          </div>
          <div className="input-box">
            <input type="text" autoComplete="off" placeholder="닉네임" maxLength={12} />
          </div>

          <AuthButton type="submit">가입하기</AuthButton>
        </fieldset>
      </form>
      <PrevButton isAbsolutePosition={true} />
    </AuthTemplate>
  );
}

export default SignUp;
