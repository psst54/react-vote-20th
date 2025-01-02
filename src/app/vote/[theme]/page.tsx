'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';
import { ThemeType, Candidate } from '@/data/types';
import { candidateData } from '@/data/candidates';
import SmallButton from '@/components/atoms/SmallButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 0 1.25rem;
  height: 100dvh;

  text-align: center;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, auto));
  gap: 1rem 0.5rem;
  width: 100%;
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export default function VotePage() {
  const router = useRouter();
  const params = useParams(); // 동적 라우트 매개변수 접근
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );
  const [voteConfirmed, setVoteConfirmed] = useState(false);

  const handleVoteResult = () => {
    router.push(`/vote/${params.theme}/result`);
  };

  const handleVote = () => {
    if (selectedCandidate) {
      alert(`${selectedCandidate.name}에게 투표되었습니다.`);
      setVoteConfirmed(true);
    }
  };

  const selectedTheme = Array.isArray(params.theme)
    ? params.theme[0]
    : params.theme;

  const candidates = candidateData[selectedTheme as ThemeType];
  const pageTitle =
    selectedTheme === 'front-end'
      ? 'FE 파트장 투표'
      : selectedTheme === 'back-end'
        ? 'BE 파트장 투표'
        : '데모데이 투표';

  return (
    <Container>
      <Text variant="header1">{pageTitle}</Text>

      <CardWrapper>
        {candidates.map((candidate) => (
          <SmallButton.Secondary
            key={candidate.id}
            isSelected={selectedCandidate?.id === candidate.id}
            text={candidate.name}
            onClick={() => setSelectedCandidate(candidate)}
          />
        ))}
      </CardWrapper>

      <ButtonArea>
        <CTAButton
          type="submit"
          text="투표하기"
          disabled={!selectedCandidate}
        />
        <CTAButton type="submit" text="결과 보기" variant="secondary" />
      </ButtonArea>
    </Container>
  );
}
