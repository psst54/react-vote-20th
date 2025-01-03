import { cookies } from 'next/headers';
import VoteResultScreen from './screen';

async function getResult() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value!;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/leader/result?part=FRONTEND`,
      {
        method: 'GET',
        headers: {
          access: accessToken,
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const data = await response.json();

    return data.leaderResults;
  } catch {
    return [];
  }
}

export interface VoteResult {
  leaderName: string;
  leaderId: number;
  teamName: string;
  voteNum: number;
}

export default async function VoteResultPage() {
  const resultList: VoteResult[] = await getResult();

  return <VoteResultScreen resultList={resultList} />;
}

export const runtime = 'edge';
