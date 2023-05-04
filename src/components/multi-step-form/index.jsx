import React from "react";

import Sidebar from "../sidebar";
import Step1 from "../step-1";
import Step2 from "../step-2";
import Step3 from "../step-3";
import Step4 from "../step-4";
import Step5 from "../step-5";

import * as S from "./styled";

import { useState } from "react";

const Steps = {
  step1: {
    component: Step1,
    title: "Personal Info",
    subtitle: "Please provide your name, email and phone number.",
    hasNextButton: true,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
    hasNextButton: true,
    hasBackButton: true,
  },
  step3: {
    component: Step3,
    title: "Add-ons help enhance your gaming experince",
    hasNextButton: true,
    hasBackButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
    hasBackButton: true,
  },
  step5: {
    component: Step5,
  },
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    // datas from steps
    step1: {},
    step2: {},
    step3: {},
  });
  const [activeStep, setActiveStep] = useState("step1");
  // ActiveStep is a component
  const ActiveStep = Steps[activeStep].component;

  const handleStepSubmit = (stepId, nextStepId, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData,
    });
    setActiveStep(nextStepId);
    console.log(formData);
  };
  const handleBack = () => {
    const currentStepNumber = Number(activeStep.slice(-1));
    setActiveStep(`step${currentStepNumber - 1}`);
  };
  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...Steps[activeStep]}
        onStepSubmit={handleStepSubmit}
        formData={formData}
        onBack={handleBack}
      />
    </S.MultiStepForm>
  );
};

export default MultiStepForm;
