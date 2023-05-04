import styled from "styled-components";

export const MultiStepForm = styled.div`
  display: flex;
  padding: 15px;
  gap: 20px;
  background-color: var(--white);
  border-radius: 15px;
  min-height: 70vh;
  min-width: 52vw;
  max-width: 65vw;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 1068px) {
    min-width: 95vw;
    position: relative;
    margin-top: -70px;
  }
`;
