import React from "react";
import * as S from "./styled";
import Step from "../step";
import ThankYou from "../../../assets/images/icon-thank-you.svg";

const Step5 = () => {
  return (
    <Step>
      <S.Step5>
        <S.ThankYou src={ThankYou} />
        <S.Title>Thank you</S.Title>
        <S.Subtitle>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </S.Subtitle>
      </S.Step5>
    </Step>
  );
};

export default Step5;
