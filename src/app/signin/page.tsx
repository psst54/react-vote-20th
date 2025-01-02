'use client';

import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import { convertToViewportHeight } from '@/styles/convertSize';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import CTAButton from '@/components/atoms/CTAButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 1rem;
  gap: 1rem;
`;
const Header = styled.div`
  gap: ${convertToViewportHeight(160)};
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;

  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;

const SloganArea = styled.header`
  text-align: center;
  padding: 1rem 1.25rem;
`;
const StyledLink = styled(Link)`
  text-decoration-color: ${({ theme }) => theme.colors.gray[300]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const SignUpText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: ${convertToViewportHeight(24)};
  text-align: center;
`;

export default function SignInPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false, // 서버 리다이렉션 방지
      id,
      password,
    });

    console.log(result);
    router.replace('/home');

    if (result?.error) {
      alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    } else {
      // 로그인 성공 시 홈으로 이동
      // router.push("/home");
    }
  };

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <Container>
      <Text variant="header1">SIGN IN!</Text>

      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Input value={id} onChange={handleIdChange} placeholder="아이디" />
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="비밀번호"
          />
        </InputContainer>

        <CTAButton text="로그인" />
      </Form>
      {/* [todo] 링크 변경 */}
      <StyledLink href="/signup">
        <SignUpText variant="caption1_rg">회원가입 </SignUpText>
      </StyledLink>
    </Container>
  );
}
