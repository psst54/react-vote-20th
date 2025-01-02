import { Candidate, ThemeType } from './types';

// 내림차순으로 정렬된 데이터
export const candidateData: Record<ThemeType, Candidate[]> = {
  'front-end': [
    { id: 1, name: '최지원' },
    { id: 2, name: '유선' },
    { id: 3, name: '윤영준' },
    { id: 4, name: '박지수' },
    { id: 5, name: '이희원' },
    { id: 6, name: '강다혜' },
    { id: 7, name: '류원' },
    { id: 8, name: '이가빈' },
    { id: 9, name: '지민재' },
    { id: 10, name: '권혜인' },
  ].sort((a, b) => a.name.localeCompare(b.name)), // 이름 내림차순 정렬

  'back-end': [
    { id: 11, name: '황서아' },
    { id: 12, name: '최서지' },
    { id: 13, name: '임가현' },
    { id: 14, name: '이한슬' },
    { id: 15, name: '이채원' },
    { id: 16, name: '유지민' },
    { id: 17, name: '문서영' },
    { id: 18, name: '남승현' },
    { id: 19, name: '나혜인' },
    { id: 20, name: '김연수' },
  ].sort((a, b) => a.name.localeCompare(b.name)), // 이름 내림차순 정렬

  'demo-day': [
    { id: 21, name: '페달지니' },
    { id: 22, name: '케이크웨이' },
    { id: 23, name: '커피딜' },
    { id: 24, name: '엔젤브릿지' },
    { id: 25, name: '포토그라운드' },
  ].sort((a, b) => a.name.localeCompare(b.name)), // 이름 내림차순 정렬
};
