import React from "react";
import Step from "../step";
import FormsJSON from "../../form.json";

import * as S from "./styled";

const { step1 } = FormsJSON;
const hasError = false;
const Step1 = (props) => {
  return (
    <Step {...props}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={hasError}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
            />
            {hasError && (
              <S.ErrorMessage>This field is required</S.ErrorMessage>
            )}
          </S.FormItem>
        ))}
      </S.Step1>
    </Step>
  );
};

export default Step1;
