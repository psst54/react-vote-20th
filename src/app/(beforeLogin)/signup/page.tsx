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
import EmailInput from "../_components/EmailInput";
import PasswordInput from "../_components/PasswordInput";
import PhoneInput from "../_components/PhoneInput";
import GenderInput from "../_components/GenderInput";
import UnivInput from "../_components/UnivInput";
import NameInput from "../_components/NameInput";

export default function SignUpPage() {
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
