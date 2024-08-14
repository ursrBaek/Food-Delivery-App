import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import AuthTemplate from 'components/AuthTemplate';
import { AuthButton, Error } from 'components/AuthTemplate/styles';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useUserNickname } from 'store';

const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const pwReg = /^[a-zA-Z0-9]{6,15}$/;

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [pwCheckError, setPwCheckError] = useState('');
  const [loginError, setLoginError] = useState('');

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setLoginError('');
    setEmail(target.value);

    if (!emailReg.test(target.value)) {
      setEmailError('유효한 이메일을 입력하세요.');
    } else {
      setEmailError('');
    }
  }, []);

  const onChangePw = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    setLoginError('');
    setPassword(target.value);

    if (!pwReg.test(target.value)) {
      setPwCheckError('비밀번호는 6~15자의 영문, 숫자입니다.');
    } else {
      setPwCheckError('');
    }
  }, []);

  const onClickSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/');
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/invalid-credential') {
        setLoginError('아이디 혹은 비밀번호가 일치하지 않습니다.');
      } else {
        setLoginError(error.code);
        console.log(error);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      alert('이미 로그인 상태입니다.');
      navigate('/');
    }
  }, [navigate]);

  return (
    <AuthTemplate>
      <form>
        <fieldset>
          <legend>회원 로그인 폼</legend>
          <div className="input-box">
            <input type="email" autoComplete="off" placeholder="아이디" onChange={onChangeEmail} value={email} disabled={loading} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="비밀번호" onChange={onChangePw} value={password} disabled={loading} />
          </div>
          <AuthButton type="submit" disabled={loading || !email || !password || !!pwCheckError || !!emailError} onClick={onClickSubmit}>
            로그인
          </AuthButton>
          <Error>{emailError || pwCheckError || loginError}</Error>
        </fieldset>
      </form>
      <div className="join">
        혹시, 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
      <div className="home">
        로그인 없이 <Link to="/">홈으로 이동</Link>
      </div>
    </AuthTemplate>
  );
}
