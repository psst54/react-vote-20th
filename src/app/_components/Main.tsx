'use client';

import Link from 'next/link';
import styled from 'styled-components';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 1rem;
  gap: 1rem;
`;

export default function Main() {
  return (
    <Container>
      <Text variant="header1">CEOS VOTE!</Text>

      {/* 버튼 클릭 시 페이지 이동 */}
      <Link href="signin">
        <CTAButton type="button" text="로그인" />
      </Link>
      <Link href="signup">
        <CTAButton type="button" text="회원가입" variant="secondary" />
      </Link>
    </Container>
  );
}
