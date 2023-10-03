import styled from "styled-components";

export const Step = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 40px 40px 20px 60px;
  @media (max-width: 1068px) {
    padding: 20px;
  }
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
  @media (max-width: 1068px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 40px;
    background-color: var(--white);
  }
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
