'use client';

import { useState } from 'react';
import CTAButton from '@/components/atoms/CTAButton';
import Text from '@/components/atoms/Text';
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from '../_components/styles';
import EmailInput from '../_components/EmailInput';
import PasswordInput from '../_components/PasswordInput';
import NameInput from '../_components/NameInput';
import Dropdown from '../_components/Dropdown';
import styled from 'styled-components';
import onSubmit from '../_lib/signup';

const DropdownContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
`;

type FormState = {
  message: string | null;
  formData: {
    id: string;
    password: string;
    email: string;
  } | null;
};

export default function Main() {
  // 초기 상태에 formData를 null로 설정
  const [state, setState] = useState<FormState>({
    message: null,
    formData: null,
  });

  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setPending(true);
    try {
      const result = await onSubmit(state, formData); // 수정된 타입에 맞게 호출
      setState(result);
      if (result.message === 'signup_success') {
        console.log('Signup successful!');
        console.log(result.formData);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <AccountSection>
          <Text variant="header1">SIGN UP!</Text>
          <NameInput />
          <PasswordInput />
          <EmailInput />
        </AccountSection>
        {state.message && (
          <Text variant="body3" style={{ color: 'red' }}>
            {state.message === 'no_id' && '아이디를 입력해주세요'}
            {state.message === 'no_password' && '비밀번호를 입력해주세요'}
            {state.message === 'no_email' && '이메일을 입력해주세요'}
            {state.message === 'user_exists' && '이미 존재하는 사용자입니다'}
            {state.message === 'server_error' && '서버 오류가 발생했습니다'}
          </Text>
        )}
        <DivideLine />

        <UserSection>
          <Text variant="title3">팀 명 / 파트</Text>
          <DropdownContainer>
            <Dropdown
              options={[
                { value: 'Photo Ground', label: 'photoGround' },
                { value: 'Angle Bridge', label: 'angleBridge' },
                { value: 'Coffee Deal', label: 'coffeeDeal' },
              ]}
              placeholder="팀 명"
              onSelect={(value) => console.log('Selected:', value)}
            />

            <Dropdown
              options={[
                { value: 'Front-End', label: 'frontend' },
                { value: 'Back-End', label: 'backend' },
              ]}
              placeholder="파트"
              onSelect={(value) => console.log('Selected:', value)}
            />
          </DropdownContainer>
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" disabled={pending} />
        </ButtonWrapper>
      </form>
    </div>
  );
}
