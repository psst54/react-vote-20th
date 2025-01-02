import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../atoms/Text';

export interface CardProps {
  size?: 'small' | 'medium' | 'large';
  title?: string;
  content?: string;
  voteCount?: number; // 투표 수 표시
  selected?: boolean; // 선택된 카드인지 여부
  onClick?: () => void;
}

const CardWrapper = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1.25rem;

  border: 1px solid ${({ theme }) => theme.colors.primary[100]};
  border-radius: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

const VoteCount = styled(Text)`
  margin-top: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export default function Card({
  size,
  title,
  content,
  voteCount,
  selected,
  onClick,
}: CardProps) {
  return (
    <CardWrapper
      selected={selected}
      onClick={onClick}
      className={`card ${size}`}
    >
      <Text variant="body1_md">{title}</Text>
      {content && <Text variant="body3">{content}</Text>}
      {voteCount !== undefined && (
        <VoteCount variant="body3">Votes: {voteCount}</VoteCount>
      )}
    </CardWrapper>
  );
}
