import { useState } from "react";
import styled from "styled-components";
import DownChevronIcon from "@/assets/DownChevronIcon";
import Text from "@/components/atoms/Text";

export interface Option {
  value: string;
  label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const FilterWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ $isOpen }) => ($isOpen ? "0.5rem 0.5rem 0 0" : "0.5rem")};
  cursor: pointer;
`;

const FilterText = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 20;
`;

const OptionWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  z-index: 21;
`;

const OptionItem = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  text-align: start;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

export default function Dropdown({
  options,
  placeholder = "Select an option",
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    handleClose();
  };

  const currentLabel = options.find(
    (option) => option.value === selectedValue,
  )?.label;

  return (
    <Container>
      <FilterWrapper onClick={handleOpen} $isOpen={isOpen}>
        <FilterText variant="body1_rg">
          {currentLabel || placeholder}
        </FilterText>
        <DownChevronIcon />
      </FilterWrapper>

      {isOpen && (
        <>
          <Backdrop onClick={handleClose} />
          <OptionWrapper>
            {options.map((option) => (
              <OptionItem
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                <FilterText variant="body1_rg">{option.label}</FilterText>
              </OptionItem>
            ))}
          </OptionWrapper>
        </>
      )}
    </Container>
  );
}
