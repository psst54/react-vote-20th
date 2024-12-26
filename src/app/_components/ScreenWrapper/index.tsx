"use client";

import { ReactNode } from "react";

import { Container, FullPage } from "./styles";

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <FullPage>
      <Container>{children}</Container>
    </FullPage>
  );
}
