"use client";

import styled from "styled-components";

import { Input, InputContainer } from "@/styles/input";
import PersonIcon from "@/assets/PersonIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export default function NameInput() {
  return (
    <Container>
      <InputContainer>
        <PersonIcon />
        <Input placeholder="아이디" type="text" required name="id" />
      </InputContainer>
    </Container>
  );
}
