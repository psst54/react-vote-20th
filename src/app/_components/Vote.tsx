import Card from '@/components/Card';
import React, { useState } from 'react';

export default function VotingUI() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [votes, setVotes] = useState([0, 0, 0]); // 초기 투표 수

  const handleVote = (index: number) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setSelectedCard(index);
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {['Frontend', 'Backend', 'Design'].map((title, index) => (
        <Card
          title={title}
          voteCount={votes[index]}
          selected={selectedCard === index}
          onClick={() => handleVote(index)}
          size="medium"
        />
      ))}
    </div>
  );
}
