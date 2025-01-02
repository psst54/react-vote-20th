import styled from 'styled-components';

const Section = styled.section`
  padding: 1.25rem;
`;

export const AccountSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const UserSection = styled(Section)``;

export const ButtonWrapper = styled.div`
  padding: 0 1.25rem 1rem 1.25rem;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;
