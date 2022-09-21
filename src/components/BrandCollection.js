import { useState } from "react";
import styled from "styled-components";
import FilterMenu from "./FilterMenu";
import TitleInFilter from "./TitleInFilter";
import ProductList from "./ProductList";
import { newFilterData } from "../utils/newFilterData";
import { useNavigate } from "react-router-dom";

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const RightWrapper = styled.div`
  padding-left: 30px;
`;

const FilterListWrapper = styled.div`
  width: 1171px;
  margin-top: 32px;
`;

const FilterList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.gray500};
  li {
    cursor: pointer;
    width: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li:hover {
    /* transform: scale(1.07); */
    transition: 0.3s linear;
    color: #000;
  }
`;

const ListBar = styled.div`
  width: 100%;
  height: 12px;
  border: 3px solid #000;
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 9px;
`;

const BarSection = styled.div`
  width: 12.5%;
  height: 100%;
`;

const filterListStyle = { color: "black" };
const barSectionStyle = {
  backgroundColor: "black",
};

const BrandCollection = () => {
  const [products, setProducts] = useState(newFilterData);
  const navigate = useNavigate();
  return (
    <>
      <LeftWrapper>
        <FilterMenu imgName={"brand"} />
      </LeftWrapper>
      <RightWrapper>
        <TitleInFilter title={"브랜드 제품 모아보기"} />
        <FilterListWrapper>
          <FilterList>
            <li
              onClick={() => {
                navigate(`/collection/new`);
              }}
            >
              NEW!
            </li>
            <li>TOP 10</li>
            <li>Summer Sale</li>
            <li>만원특가</li>
            <li
              style={filterListStyle}
              onClick={() => {
                navigate(`/collection/brand`);
              }}
            >
              브랜드
            </li>
            <li>FleaLIVE 상품</li>
            <li
              onClick={() => {
                navigate(`/collection/recom`);
              }}
            >
              추천상품
            </li>
            <li
              onClick={() => {
                navigate(`/collection/popular`);
              }}
            >
              인기상품
            </li>
          </FilterList>
          <ListBar>
            <BarSection />
            <BarSection />
            <BarSection />
            <BarSection />
            <BarSection style={barSectionStyle} />
            <BarSection />
            <BarSection />
            <BarSection />
          </ListBar>
        </FilterListWrapper>
        <ProductList products={products} setProducts={setProducts} />
      </RightWrapper>
    </>
  );
};

export default BrandCollection;
