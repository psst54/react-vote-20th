import VoteScreen from './screen';

async function getCandidate() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/votes/leader?part=FRONTEND`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error('Failed to load data');
    }

    const data = await response.json();

    return data.leaders.map(
      (leader: { leaderId: string; leaderName: string }) => ({
        id: leader.leaderId,
        label: leader.leaderName,
      }),
    );
  } catch {
    return [];
  }
}
export default async function VotePage() {
  const candidateList = await getCandidate();

  return <VoteScreen candidateList={candidateList} />;
}

export const runtime = 'edge';
