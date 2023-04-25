import styled from "styled-components";

export const Step1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  font-size: 14px;
  ${({ hasError }) =>
    hasError &&
    `
    input {
      border-color: var(--strawberry-red);
    `}
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 14px;
  font-size: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  color: var(--marine-blue);
  font-weight: 500;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: var(--purplish-blue);
  }
  &::placeholder {
    color: var(--cool-gray);
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: var(--strawberry-red);
  font-weight: 700;
`;
