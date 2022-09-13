import styled from "styled-components";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import axios from "axios";
import { useEffect, useState } from "react";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 0px;
`;

let title = "사람들이 많이 스크랩한 인기 상품이에요";

const PopularSection = () => {
  // 인기상품
  const [popularItems, setPopularItems] = useState([]);
  // 인기상품 조회
  const showPopularItems = async () => {
    try {
      const response = await axios.get(
        `https://hee-backend.shop:7179/product/popularity/select`
      );
      setPopularItems(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showPopularItems();
  }, []);
  return (
    <TopWrapper>
      <TitleInHome title={title} />
      <ItemImages items={popularItems} />
    </TopWrapper>
  );
};

export default PopularSection;
