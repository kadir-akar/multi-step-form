import styled, { css } from "styled-components";

import SidebarBg from "../../assets/images/bg-sidebar-desktop.svg";
import SidebarBgMobile from "../../assets/images/bg-sidebar-mobile.svg";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px;
  color: var(--white);
  width: 30%;
  border-radius: 8px;
  @media (max-width: 1068px) {
    background-image: url(${SidebarBgMobile});
    height: 17vh;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100%;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    text-align: center;
    justify-content: center;

    z-index: -1;
  }
`;

export const ItemNumber = styled.div`
  width: 33px;
  height: 33px;
  border: 1px solid var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1068px) {
    margin-top: -30px;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `}
  }
`;
export const ItemBody = styled.div``;

export const Subtitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  @media (max-width: 1068px) {
    display: none;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  text-weight: bold;
  @media (max-width: 1068px) {
    display: none;
  }
`;
