/* eslint-disable */
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import { BrandSectionData } from "../utils/BrandSectiondata";
import TitleInHome from "./TitleInHome";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/BottomBanners/`;

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
      padding-right: 11px;
      .logo{
        position: absolute;
        top: 38%; 
        left:25%;
        opacity : 0;
      }
    }
    .brand:hover{
      opacity: 0.5;
    }
    .brand:hover > .logo{
        opacity: 1;
      }
    
    a {
      ${({ theme }) => theme.english.subtitle2};
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
              <a href="#">#{brand[i].name}</a>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default BrandSection;
