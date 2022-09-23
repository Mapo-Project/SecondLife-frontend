import { useState } from "react";
import styled from "styled-components";
import { StepSectionData } from "../utils/StepSectiondata";

const Section = styled.div`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 113px;
`;
const Title = styled.h1`
  margin-bottom: 35px;
  ${({ theme }) => theme.korean.headline6};
  color: ${({ theme }) => theme.colors.gray900};
`;
const Content = styled.div`
  display: flex;
  img {
    margin-right: 15px;
  }
`;

const StepSection = () => {
  let [step] = useState(StepSectionData);

  return (
    <Section>
      {/* <TitleInHome title={title} /> */}
      <Title>2NDLIFE 를 시작하는 5가지 방법</Title>
      <Content>
        {step.map((a, i) => {
          return (
            <div key={i}>
              <img src={step[i].url} alt="step" />
            </div>
          );
        })}
      </Content>
    </Section>
  );
};

export default StepSection;
