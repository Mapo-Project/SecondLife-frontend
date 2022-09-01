import styled from "styled-components";
import { itemsData3 } from "../utils/itemsData3";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { useSelector } from "react-redux";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 0px;
`;

let hashtag = "네온";
// 비로그인 섹션 제목
let nonloginTitle = `22 S/S 트렌드 키워드! #${hashtag} 상품 모아보기`;

const HashtagSection = () => {
  // 회원정보
  const { data } = useSelector((state) => state.user);
  // 로그인 섹션 제목
  let loginTitle = "";
  if (data) {
    let user = data.name;
    loginTitle = `${user}님이 관심있는 #${hashtag} 상품 모아보기`;
  }

  return (
    <TopWrapper>
      {data ? (
        <TitleInHome title={loginTitle} route={"collection/recom"} />
      ) : (
        <TitleInHome title={nonloginTitle} route={"collection/recom"} />
      )}
      <ItemImages items={itemsData3} />
    </TopWrapper>
  );
};

export default HashtagSection;
