import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BrandCollection from "../components/BrandCollection";
import Navbar from "../components/Navbar";
import NewCollection from "../components/NewCollection";
import PopularCollection from "../components/PopularCollection";
import RecomCollection from "../components/RecomCollection";

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

const ProductSection = () => {
  return (
    <Section>
      <Navbar />
      <ContentsWrapper>
        <Routes>
          <Route path="new" element={<NewCollection />} />
          <Route path="brand" element={<BrandCollection />} />
          <Route path="popular" element={<PopularCollection />} />
          <Route path="recom" element={<RecomCollection />} />
        </Routes>
      </ContentsWrapper>
    </Section>
  );
};

export default ProductSection;
