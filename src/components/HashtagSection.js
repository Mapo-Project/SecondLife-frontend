import styled from "styled-components";
import { itemsData } from "../utils/itemsData";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";

let user = "김뫄뫄";
let hashtag = "네온";
let title = `${user}님이 관심있는 #${hashtag} 상품 모아보기`;

const TopWrapper = styled.div`
  width: 1410px;
  margin: auto;
`;

const HashtagSection = () => {
  return (
    <TopWrapper>
      <TitleInHome title={title} />
      <ItemImages items={itemsData} />
    </TopWrapper>
  );
};

export default HashtagSection;
