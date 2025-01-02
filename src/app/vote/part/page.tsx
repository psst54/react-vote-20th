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

export default function VotePage() {
  return (
    <Container>
      <Text variant="header1">파트장 투표</Text>
      <CardWrapper>
        <Link href="/vote/front-end">
          <SmallButton.Tertiary text="FRONT-END" />
        </Link>
        <Link href="/vote/back-end">
          <SmallButton.Tertiary text="BACK-END" />
        </Link>
      </CardWrapper>
    </Container>
  );
}
