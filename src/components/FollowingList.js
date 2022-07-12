import styled from "styled-components";
import { followingListData } from "../utils/followingListData";
import TitleInHome from "./TitleInHome";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 0 auto 140px;
  /* background-color: aliceblue; */
  /* 스크롤바 설정*/
  .items::-webkit-scrollbar {
    height: 3px;
  }
  .items:hover::-webkit-scrollbar {
    height: 8px;
  }
  /* 스크롤바 막대 설정*/
  .items::-webkit-scrollbar-thumb {
    border-radius: 33px;
    background-color: #000;
  }
  .items:hover::-webkit-scrollbar-thumb {
    border-radius: 50px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  /* background-color: aqua; */
  overflow-x: auto;
  overflow-y: hidden;
`;

const ItemWrapper = styled.div`
  text-align: center;
  margin-right: 27.32px;
  img {
    width: 124px;
    margin-bottom: 10px;
    border-radius: 100%;
    /* background-color: aquamarine; */
  }
  h5 {
    ${({ theme }) => theme.english.caption};
    color: ${({ theme }) => theme.colors.gray900};
    /* background-color: beige; */
    margin-bottom: 13px;
  }
  position: relative;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.green300};
  position: absolute;
  top: 5px;
  right: 18px;
`;

let user = `김뫄뫄`;
let title = `${user}님이 팔로우한 셀러`;

const FollowingList = () => {
  return (
    <TopWrapper>
      <TitleInHome title={title} />
      <ItemsWrapper className="items">
        {followingListData.map((datum) => (
          <ItemWrapper key={datum.id}>
            {datum.active && <Circle />}
            <img src={datum.imgUrl} alt={datum.following} />
            <h5>{datum.following}</h5>
          </ItemWrapper>
        ))}
      </ItemsWrapper>
    </TopWrapper>
  );
};
export default FollowingList;
