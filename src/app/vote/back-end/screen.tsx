'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';
import SmallButton from '@/components/atoms/SmallButton';
import { Candidate } from '@/data/types';

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

export default function VoteScreen({
  candidateList,
}: {
  candidateList: any[];
}) {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );

  //   const handleVoteResult = () => {
  //     router.push(`/vote/${params.theme}/result`);
  //   };

  //   const handleVote = () => {
  //     if (selectedCandidate) {
  //       alert(`${selectedCandidate.name}에게 투표되었습니다.`);
  //       setVoteConfirmed(true);
  //     }
  //   };

  return (
    <Container>
      <Text variant="header1">BE 파트장 투표</Text>

      <CardWrapper>
        {candidateList.map((candidate) => (
          <SmallButton.Secondary
            key={candidate.id}
            isSelected={selectedCandidate?.id === candidate.id}
            text={candidate.label}
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
