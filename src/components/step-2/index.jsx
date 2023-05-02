import React from "react";
import Step from "../step";
import FormJSON from "../../form.json";
import { useState } from "react";

import * as S from "./styled";
import "./toggle.css";

import { Icons, defaultPlan, defaultBillingType } from "./constants";

const { step2 } = FormJSON;

const Step2 = ({ onStepSubmit, formData, ...props }) => {
  const [plan, setPlan] = useState(formData.step2.plan ?? defaultPlan);
  const [billingType, setBillingType] = useState(
    formData.step2.billingType ?? defaultBillingType
  );

  const changePlan = (newPlan) => {
    setPlan(newPlan);
  };
  const Changetoggle = () => {
    if (billingType === "monthly") {
      setBillingType("yearly");
    } else {
      setBillingType("monthly");
    }
  };
  const onSubmit = (e) => {
    onStepSubmit("step2", "step3", { billingType, plan });
  };

  return (
    <Step {...props} handleSubmit={onSubmit}>
      <S.Step2>
        <S.RadioGroup>
          {step2[billingType].map((item) => (
            <S.RadioLabel key={item.id} isSelected={item.id === plan.id}>
              <S.RadioInput
                name="plan-type"
                type="radio"
                onChange={() => changePlan(item)}
              />
              <S.Icon src={Icons[item.id]} />
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>{item.price}</S.Subtitle>
              {billingType === "yearly" && (
                <S.Description>{item.description}</S.Description>
              )}
            </S.RadioLabel>
          ))}
        </S.RadioGroup>

        <S.BillingGroup>
          <S.BillingButton type="button" isSelected={billingType === "monthly"}>
            Monthly
          </S.BillingButton>
          <label className="switch" onChange={Changetoggle}>
            <input type="checkbox" defaultChecked={billingType === "yearly"} />
            <span className="slider round"></span>
          </label>
          <S.BillingButton type="button" isSelected={billingType === "yearly"}>
            Yearly
          </S.BillingButton>
        </S.BillingGroup>
      </S.Step2>
    </Step>
  );
};

export default Step2;
