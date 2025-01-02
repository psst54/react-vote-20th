'use client';

import { ReactNode, useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';
import CTAButton from '@/components/atoms/CTAButton';
import PersonIcon from '@/assets/PersonIcon';
import PasswordIcon from '@/assets/PasswordIcon';
import { Input, InputContainer } from '@/styles/input';

const FIELD_LIST: {
  field: 'username' | 'password';
  placeholder: string;
  type: string;
  icon: ({ size }: { size: string }) => ReactNode;
}[] = [
  {
    field: 'username',
    placeholder: '아이디',
    type: 'text',
    icon: PersonIcon,
  },
  {
    field: 'password',
    placeholder: '비밀번호',
    type: 'password',
    icon: PasswordIcon,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 1rem;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration-color: ${({ theme }) => theme.colors.gray[300]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
`;

const SignUpText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-align: center;
`;

export default function SignInPage() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false, // 서버 리다이렉션 방지
      id: data.username,
      password: data.password,
    });

    if (result?.error) {
      alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    } else {
      // 로그인 성공 시 홈으로 이동
      router.push('/home');
    }
  };

  return (
    <Container>
      <Text variant="header1">SIGN IN!</Text>

      <Form onSubmit={handleLogin}>
        <InputWrapper>
          {FIELD_LIST.map((fieldItem) => {
            const { placeholder, field, type } = fieldItem;
            const value = data[field];

            return (
              <InputContainer key={field}>
                <fieldItem.icon size="1.5rem" />
                <Input
                  value={value}
                  onChange={(event) => {
                    const newData = { ...data };
                    newData[field] = event.target.value;
                    setData(newData);
                  }}
                  placeholder={placeholder}
                  type={type}
                  required
                />
              </InputContainer>
            );
          })}
        </InputWrapper>

        <CTAButton type="submit" text="로그인" />
      </Form>

      <StyledLink href="/signup">
        <SignUpText variant="caption1_rg">회원가입 </SignUpText>
      </StyledLink>
    </Container>
  );
}
