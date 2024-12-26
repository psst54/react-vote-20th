"use client";

import CTAButton from "@/components/atoms/CTAButton";
import Text from "@/components/atoms/Text";
import TNB from "@/components/TNB";
import {
  AccountSection,
  ButtonWrapper,
  DivideLine,
  UserSection,
} from "./styles";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PhoneInput from "./PhoneInput";
import GenderInput from "./GenderInput";
import UnivInput from "./UnivInput";
import NameInput from "./NameInput";

export default function Main() {
  return (
    <div>
      <TNB.Back text="일반 회원가입" />

      <form>
        <AccountSection>
          <Text variant="title3">계정 정보</Text>
          <EmailInput />
          <PasswordInput />
        </AccountSection>

        <DivideLine />

        <UserSection>
          <Text variant="title3">회원 정보</Text>
          <NameInput />
          <PhoneInput />
          <UnivInput />
          <GenderInput />
        </UserSection>

        <ButtonWrapper>
          <CTAButton text="가입하기" disabled />
        </ButtonWrapper>
      </form>
    </div>
  );
}
