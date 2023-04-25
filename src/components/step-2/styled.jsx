import styled from "styled-components";

export const Step2 = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const RadioLabel = styled.label`
  margin-top: 20px;
  height: 100%;
  flex: 1;
  border: 1px solid var(--light-gray);
  padding: 15px;
  border-radius: 6px;
  transition: border-color 0.2s ease-in-out;
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: var(--alabaster);
    border-color: var(--purplish-blue);
  `}

  &:hover {
    border-color: 1px solid var(--primary);
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 32px;
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const Subtitle = styled.h6`
  font-weight: 400;
  color: var(--cool-gray);
`;

export const BillingGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: var(--cool-gray);
`;

export const BillingButton = styled.button`
  background-color: var(--alabester);
  border: 1px solid var(--light-gray);
  padding: 12px;
  border-radius: 6px;
  ${({ isSelected }) =>
    isSelected &&
    `
    color: var(--prussian-blue);
    background-color: var(--alabaster);
    border-color: var(--purplish-blue);
  `}
`;
