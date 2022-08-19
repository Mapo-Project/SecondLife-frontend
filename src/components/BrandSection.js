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
  .content {
    display: flex;
    margin-bottom: 100px;
    width: 100%;
    overflow: scroll;
    scroll-margin-bottom: 0;
    white-space: nowrap;
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
  .content::-webkit-scrollbar {
    display: none;
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
      <div className="content" {...events} ref={containerRef}>
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
