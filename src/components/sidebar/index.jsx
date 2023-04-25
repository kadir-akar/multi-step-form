import React from "react";
import { Items } from "./constants";
import * as S from "./styled";

const Sidebar = ({ activeStep }) => {
  return (
    <S.SidebarContainer>
      {Items.map((item) => (
        <S.Item key={item.id} isActive={activeStep === item.id}>
          <S.ItemNumber>{item.number}</S.ItemNumber>
          <S.ItemBody>
            <S.Subtitle>{item.subtitle}</S.Subtitle>
            <S.Title>{item.title}</S.Title>
          </S.ItemBody>
        </S.Item>
      ))}
    </S.SidebarContainer>
  );
};

export default Sidebar;
