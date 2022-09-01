import styled from "styled-components";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { itemsData2 } from "../utils/itemsData2";
import axios from "axios";
import { useEffect, useState } from "react";

let title = "사람들이 많이 스크랩한 인기 상품이에요";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 0px;
`;

const PopularSection = () => {
  const [popularItems, setPopularItems] = useState([]);
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
      <TitleInHome title={title} route={"collection/popular"} />
      <ItemImages items={popularItems} />
    </TopWrapper>
  );
};

export default PopularSection;
