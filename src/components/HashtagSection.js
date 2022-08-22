import styled from "styled-components";
import { itemsData3 } from "../utils/itemsData3";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { useSelector } from "react-redux";

let hashtag = "네온";
let nonloginTitle = `22 S/S 트렌드 키워드! #${hashtag} 상품 모아보기`;

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 0px;
`;

const HashtagSection = () => {
  const { data } = useSelector((state) => state.user);
  let loginTitle = "";
  if (data) {
    let user = data.name;
    loginTitle = `${user}님이 관심있는 #${hashtag} 상품 모아보기`;
  }

  return (
    <TopWrapper>
      {data ? (
        <TitleInHome title={loginTitle} />
      ) : (
        <TitleInHome title={nonloginTitle} />
      )}
      <ItemImages items={itemsData3} />
    </TopWrapper>
  );
};

export default HashtagSection;
