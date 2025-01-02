import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from './styles';

const TertiaryButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary[100]};
`;

export default function Tertiary({
  text,
  onClick = () => {},
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <TertiaryButton onClick={onClick}>
      <Text variant="title1_rg">{text}</Text>
    </TertiaryButton>
  );
}
