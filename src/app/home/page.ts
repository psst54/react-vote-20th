"use client";

import styled from "styled-components";

import { convertToViewportHeight } from "@/styles/convertSize";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Text
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 1rem;
  gap: 1rem;
`;
const Header = styled.div`
  gap: ${convertToViewportHeight(160)};
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;

  background: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gray[900]};
  border-radius: 0.5rem;

  font-size: ${({ theme }) => theme.typography.body2_rg.fontSize};
  font-weight: ${({ theme }) => theme.typography.body2_rg.fontWeight};
  line-height: ${({ theme }) => theme.typography.body2_rg.lineHeight};
  color: ${({ theme }) => theme.colors.white};
`;

const SloganArea = styled.header`
  text-align: center;
  padding: 1rem 1.25rem;
`;
const StyledLink = styled(Link)`
  text-decoration-color: ${({ theme }) => theme.colors.gray[300]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const SignUpText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[300]};
  margin-top: ${convertToViewportHeight(24)};
  text-align: center;
`;

export default function Home() {
  const router = useRouter();


  return (
    <Container>
      <Text variant="header1">파트장 / 데모데이 투표</Text>

      <Form onSubmit={handleLogin}>
        <InputContainer>
          <Input value={id} onChange={handleIdChange} placeholder="아이디" />
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="비밀번호"
          />
        </InputContainer>

        <CTAButton text="로그인" />
      </Form>
      {/* [todo] 링크 변경 */}
      <StyledLink href="/signup">
        <SignUpText variant="caption1_rg">회원가입 </SignUpText>
      </StyledLink>
    </Container>
  );
}
