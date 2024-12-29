'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { ThemeType, Candidate } from '@/data/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 1rem;
  gap: 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 500px;
`;

const ResultItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray[50]};
`;

const TotalVotes = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function VoteResultPage() {
  const router = useRouter();
  const params = useParams();

  // 임시 투표 결과 데이터 (테마별)
  const resultData: Record<ThemeType, { name: string; votes: number }[]> = {
    'front-end': [
      { name: '최지원', votes: 10 },
      { name: '유선', votes: 8 },
      { name: '윤영준', votes: 6 },
      { name: '박지수', votes: 5 },
    ],
    'back-end': [
      { name: '황서아', votes: 12 },
      { name: '최서지', votes: 9 },
      { name: '임가현', votes: 7 },
      { name: '이한슬', votes: 4 },
    ],
    'demo-day': [
      { name: '페달지니', votes: 15 },
      { name: '케이크웨이', votes: 12 },
      { name: '커피딜', votes: 8 },
      { name: '엔젤브릿지', votes: 6 },
      { name: '포토그라운드', votes: 4 },
    ],
  };

  const selectedTheme = params.theme as ThemeType;
  const results = resultData[selectedTheme] || [];
  const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);

  return (
    <Container>
      <Header>
        <h1>
          {selectedTheme === 'front-end'
            ? 'FE 파트장 투표 결과'
            : selectedTheme === 'back-end'
              ? 'BE 파트장 투표 결과'
              : '데모데이 투표 결과'}
        </h1>
      </Header>
      <ResultList>
        {results.map((result, index) => (
          <ResultItem key={index}>
            <span>{result.name}</span>
            <span>{result.votes}표</span>
          </ResultItem>
        ))}
      </ResultList>
      <TotalVotes>총 투표 수: {totalVotes}</TotalVotes>
      <BackButton onClick={() => router.push(`/vote/${params.theme}`)}>
        투표 페이지로 돌아가기
      </BackButton>
    </Container>
  );
}
