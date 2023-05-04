import styled from "styled-components";

export const Step = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 40px 40px 20px 60px;
`;

export const StepHeader = styled.div``;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const Subtitle = styled.h3`
  color: var(--cool-gray);
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.button`
  color: var(--cool-gray);
  &:hover {
    color: var(--cool-gray-2);
  }
`;

export const GoNextButton = styled.button`
  margin-left: auto;
  color: var(--white);
  background-color: var(--marine-blue);
  padding: 8px 16px;
  border-radius: 5px;
`;
