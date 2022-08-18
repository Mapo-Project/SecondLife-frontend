/* eslint-disable */
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { BrandSectionData } from "../utils/BrandSectiondata";
import TitleInHome from "./TitleInHome";

const Section = styled.div`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  .content {
    height: 508px;
    display: flex;
    margin-bottom: 100px;
    .brand {
      position: relative;
      margin-right: 11px;
      cursor: pointer;
      .logo {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        opacity: 0;
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    }
    .brand:hover > .logo {
      opacity: 1;
    }

    span {
      ${({ theme }) => theme.english.subtitle2};
      cursor: pointer;
    }
  }
`;

const BrandSection = () => {
  let title = "#브랜드 제품 모아보기";
  let [brand] = useState(BrandSectionData);

  return (
    <Section>
      <TitleInHome title={title} />
      <div className="content">
        {brand.map((a, i) => {
          return (
            <div className="item" key={i}>
              <div className="brand">
                <img src={brand[i].url} alt="" />
                <div className="logo">
                  <img src={brand[i].logo} alt="" />
                </div>
              </div>
              <span>#{brand[i].name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default BrandSection;
