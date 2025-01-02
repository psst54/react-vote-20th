'use client';

import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 1rem;
  gap: 1rem;
`;

export default function Main() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleSigninClick = () => {
    router.push('/signin');
  };

  return (
    <Container>
      <Text variant="header1">CEOS VOTE!</Text>

      {/* 버튼 클릭 시 페이지 이동 */}
      <CTAButton
        text="회원가입"
        variant="secondary"
        onClick={handleSignupClick}
      />
      <CTAButton text="로그인" onClick={handleSigninClick} />
    </Container>
  );
}
