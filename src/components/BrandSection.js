/* eslint-disable */
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { BrandSectionData } from "../utils/BrandSectiondata";
import TitleInHome from "./TitleInHome";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Section = styled.div`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 102px;
`;
const Content = styled.div`
  margin-bottom: 100px;
  display: flex;
  overflow: scroll;
  /* scroll-margin-bottom: 0; */
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin-right: 11px;

  .brand:hover > .logo {
    opacity: 1;
  }
`;
const Brand = styled.div`
  position: relative;
  height: 452px;
`;

const Logo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
`;
const BrandName = styled.div`
  margin-top: 8px;
  span {
    ${({ theme }) => theme.english.subtitle2};
    cursor: pointer;
  }
`;

const BrandSection = () => {
  let title = "#브랜드 제품 모아보기";
  let [brand] = useState(BrandSectionData);

  //마우스 드래그 스크롤
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  return (
    <Section>
      <TitleInHome title={title} />
      <Content {...events} ref={containerRef}>
        {brand.map((a, i) => {
          return (
            <Wrapper key={i}>
              <Brand className="brand">
                <img src={a.url} alt="" />
                <Logo className="logo">
                  <img src={a.logo} alt="" />
                </Logo>
              </Brand>
              <BrandName>
                <span>#{a.name}</span>
              </BrandName>
            </Wrapper>
          );
        })}
      </Content>
    </Section>
  );
};

export default BrandSection;
