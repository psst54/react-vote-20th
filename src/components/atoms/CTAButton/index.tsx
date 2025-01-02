import styled, { DefaultTheme } from 'styled-components';
import Text from '@/components/atoms/Text';

type Variant = 'primary' | 'secondary';

const getBackgroundColor = ({
  theme,
  variant,
  disabled,
}: {
  theme: DefaultTheme;
  variant: Variant;
  disabled: boolean;
}) => {
  if (disabled) {
    return theme.colors.gray[600];
  }
  if (variant === 'primary') {
    return theme.colors.primary[100];
  }
  return 'transparent';
};

const getBorder = ({
  theme,
  variant,
  disabled,
}: {
  theme: DefaultTheme;
  variant: Variant;
  disabled: boolean;
}) => {
  if (disabled) {
    return 'none';
  }
  if (variant === 'primary') {
    return 'none';
  }
  return `1px solid ${theme.colors.primary[100]}`;
};

const Button = styled.button<{ variant: Variant; disabled: boolean }>`
  width: 100%;
  padding: 1rem 0;
  background: ${(props) => getBackgroundColor(props)};

  outline: none;
  border: ${(props) => getBorder(props)};
  border-radius: 0.5rem;

  cursor: pointer;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

export default function CTAButton({
  type = 'button',
  text,
  variant = 'primary',
  disabled = false,
  onClick = () => {},
}: {
  type: 'button' | 'submit';
  text: string;
  variant?: Variant;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <Button type={type} variant={variant} disabled={disabled} onClick={onClick}>
      {disabled ? (
        <ButtonText variant="title3">{text}</ButtonText>
      ) : (
        <Text variant="title3">{text}</Text>
      )}
    </Button>
  );
}
