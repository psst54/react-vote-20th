'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import Text from '@/components/atoms/Text';
import Card from '@/components/Card';

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

export default function VotePage() {
  const router = useRouter();
  const params = useParams(); // 동적 라우트 매개변수 접근

  const pageTitle = '파트장 투표';
  const handleNavigation = (path: string) => {
    router.push(`/vote/${path}`);
  };
  return (
    <Container>
      <Text variant="header1">{pageTitle}</Text>
      <CardWrapper>
        <Card
          size="large"
          content="FE파트장장"
          onClick={() => handleNavigation('front-end')}
        />

        <Card
          size="large"
          content="데모데이 투표"
          onClick={() => handleNavigation('back-end')}
        />
      </CardWrapper>
    </Container>
  );
}
