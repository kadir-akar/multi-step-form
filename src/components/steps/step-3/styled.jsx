import styled from "styled-components";

export const Step3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Item = styled.label`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 10px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  transition: border 0.2s ease-in-out;
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: var(--alabaster);
    border-color: var(--purplish-blue);
  `}

  &:hover {
    border: 1px solid var(--purplish-blue);
  }
`;

export const Input = styled.input``;

export const InputBody = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  font-weight: 500;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: var(--cool-gray);
`;

export const Price = styled.p`
  color: var(--purplish-blue);
  font-weight: 500;
`;
