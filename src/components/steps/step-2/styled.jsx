import styled, { css } from "styled-components";

export const Step2 = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
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
  @media (max-width: 1068px) {
    display: flex;
    gap: 12px;
    height: 10%;
    align-items: center;
    text-align: center;
  }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const Icon = styled.img`
  margin-bottom: 32px;
  @media (max-width: 1068px) {
    margin: 0;
    margin-right: 12px;
  }
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
  gap: 12px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  background-color: var(--alabaster);
  padding: 10px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: var(--cool-gray);
`;

export const BillingButton = styled.button`
  background-color: var(--alabester);
  ${({ isSelected }) =>
    isSelected &&
    `
    font-weight: 700;
    color: var(--prussian-blue);
  `}
`;
