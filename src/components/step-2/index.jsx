import React from "react";
import Step from "../step";
import FormJSON from "../../form.json";

import { useState } from "react";

import * as S from "./styled";

import { Icons, defaultPlan, defaultBillingType } from "./constants";

const { step2 } = FormJSON;

const Step2 = (props) => {
  const [plan, setPlan] = useState(defaultPlan);
  const [billigType, setBillingType] = useState(defaultBillingType);

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };

  const changeBilling = (newBillingType) => {
    setBillingType(newBillingType);
  };

  return (
    <Step {...props}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billigType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item.id)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billigType === "yearly" && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>
        <S.BillingGroup>
          <S.BillingButton
            type="button"
            onClick={() => changeBilling("monthly")}
            isSelected={billigType === "monthly"}
          >
            Monthly
          </S.BillingButton>
          <S.BillingButton
            type="button"
            onClick={() => changeBilling("yearly")}
            isSelected={billigType === "yearly"}
          >
            Yearly
          </S.BillingButton>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
};

export default Step2;
