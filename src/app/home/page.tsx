'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import SmallButton from '@/components/atoms/SmallButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding: 0 1.25rem;
  height: 100dvh;

  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Text variant="header1">투표 카테고리를 선택하세요</Text>
      <CardWrapper>
        <Link href="/vote/part">
          <SmallButton.Tertiary text="파트장 투표" />
        </Link>
        <Link href="/vote/demo-day">
          <SmallButton.Tertiary text="데모데이 투표" />
        </Link>
      </CardWrapper>
    </Container>
  );
}
