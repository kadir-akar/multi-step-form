import React, { useState, useEffect } from "react";
import Step from "../step";
import FormsJSON from "../../../form.json";

import * as S from "./styled";

const Step1 = ({ onStepSubmit, formData, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const { step1 } = FormsJSON;
  // const hasError = false;
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const stepData = {};
    for (let name of data.keys()) {
      stepData[name] = data.get(name);
    }
    if (Object.values(stepData).some((value) => !value)) {
      setHasError(true);
    } else {
      setHasError(false);
      onStepSubmit("step1", "step2", stepData);
    }
  };

  const changeHandler = (e) => {
    if (e.target.value) {
      setHasError(false);
    }
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step1>
        {step1.map((item) => (
          <S.FormItem key={item.id} hasError={hasError}>
            <S.Label htmlFor={item.id}>{item.label}</S.Label>
            <S.Input
              id={item.id}
              name={item.id}
              type={item.type}
              placeholder={item.placeholder}
              onChange={(e) => {
                changeHandler(e);
              }}
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
