import Text from "@/app/_components/atoms/Text";
import { Header } from "./styles";

export default function Title({ text }: { text: string }) {
  return (
    <Header>
      <Text variant="header2" as="h1">
        {text}
      </Text>
    </Header>
  );
}
