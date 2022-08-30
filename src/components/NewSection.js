import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import FilterMenu from "./FilterMenu";
import TitleInFilter from "./TitleInFilter";
import ProductList from "./ProductList";
import { newFilterData } from "../utils/newFilterData";
import { Link } from "react-router-dom";

const Section = styled.div`
  background-color: #fff;
`;

const ContentsWrapper = styled.div`
  display: flex;
  padding-bottom: 240px;
  background-color: #fff;
  width: 1410px;
  margin: 0 auto;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 47px;
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
  background-color: #fff;
`;

const filterListStyle = { color: "black" };
const barSectionStyle = {
  backgroundColor: "black",
  borderRadius: `8px 0 0 8px`,
};

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const NewSection = () => {
  const [products, setProducts] = useState(newFilterData);
  return (
    <Section>
      <Navbar />
      <ContentsWrapper>
        <LeftWrapper>
          <FilterMenu imgName={"new"} />
        </LeftWrapper>
        <RightWrapper>
          <TitleInFilter title={"NEW! 지금 업데이트 된 상품"} />
          <FilterListWrapper>
            <FilterList>
              <Link to="/new">
                <li style={filterListStyle}>NEW!</li>
              </Link>
              <li>TOP 10</li>
              <li>Summer Sale</li>
              <li>만원특가</li>
              <li>브랜드</li>
              <li>FleaLIVE 상품</li>
              <li>추천상품</li>
              <li>인기상품</li>
            </FilterList>
            <ListBar>
              <BarSection style={barSectionStyle} />
              <BarSection />
              <BarSection />
              <BarSection />
              <BarSection />
              <BarSection />
              <BarSection />
              <BarSection />
            </ListBar>
          </FilterListWrapper>
          <ProductList products={products} setProducts={setProducts} />
        </RightWrapper>
      </ContentsWrapper>
    </Section>
  );
};

export default NewSection;
