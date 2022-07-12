import styled from "styled-components";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { itemsData } from "../utils/itemsData";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 0 auto;
`;

const PopularSection = () => {
  return (
    <TopWrapper>
      <TitleInHome title={"사람들이 많이 스크랩한 인기 상품이에요"} />
      <ItemImages items={itemsData} />
    </TopWrapper>
  );
};

export default PopularSection;
