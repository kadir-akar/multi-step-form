import React from "react";
import Step from "../step";

import * as S from "./styled";

const Step4 = ({ formData, ...props }) => {
  return (
    <Step {...props}>
      <S.Step4>
        <S.MainRow>
          <S.Title>
            {formData.step2} ({formData.step2.billingType})
          </S.Title>
          <S.Price>Price</S.Price>
        </S.MainRow>
      </S.Step4>
    </Step>
  );
};

export default Step4;
