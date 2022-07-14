import styled from "styled-components";
import { itemsData } from "../utils/itemsData";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";

let user = "김뫄뫄";
let title = `${user}님이 팔로우한 셀러의 상품 모아보기`;

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 135px;
`;

const FollowingPDSection = () => {
  return (
    <TopWrapper>
      <TitleInHome title={title} />
      <ItemImages items={itemsData} />
    </TopWrapper>
  );
};

export default FollowingPDSection;
