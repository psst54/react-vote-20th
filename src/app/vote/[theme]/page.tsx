'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Text from '@/components/atoms/Text';
import Card from '@/components/Card';
import CTAButton from '@/components/atoms/CTAButton';
import { ThemeType, Candidate } from '@/data/types';
import { candidateData } from '@/data/candidates';
// 스타일 컴포넌트 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 1rem;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

// StyledCard: Card를 확장하여 스타일링
const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 6rem;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.primary : theme.colors.gray[300]};
  border-radius: 8px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primaryLight : '#fff'};
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    cursor: not-allowed;
  }
`;

export default function VotePage() {
  const router = useRouter();
  const params = useParams(); // 동적 라우트 매개변수 접근
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  );
  const [voteConfirmed, setVoteConfirmed] = useState(false);

  const handleBack = () => {
    router.push('/');
  };

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
          <StyledCard
            key={candidate.id}
            isSelected={selectedCandidate?.id === candidate.id}
            size="small"
            title={candidate.name}
            onClick={() => setSelectedCandidate(candidate)}
          />
        ))}
      </CardWrapper>
      <ButtonWrapper>
        <CTAButton
          onClick={handleVote}
          disabled={!selectedCandidate || voteConfirmed}
          text="투표하기"
        />
        <CTAButton onClick={handleVoteResult} text="결과보기" />
      </ButtonWrapper>
    </Container>
  );
}
