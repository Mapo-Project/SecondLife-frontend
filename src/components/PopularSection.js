import styled from "styled-components";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { itemsData2 } from "../utils/itemsData2";

let title = "사람들이 많이 스크랩한 인기 상품이에요";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 0px auto 135px;
`;

const PopularSection = () => {
  return (
    <TopWrapper>
      <TitleInHome title={title} />
      <ItemImages items={itemsData2} />
    </TopWrapper>
  );
};

export default PopularSection;
