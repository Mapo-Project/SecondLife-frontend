import styled from "styled-components";
import ItemImages from "./ItemImages";
import TitleInHome from "./TitleInHome";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { selectUserProfile } from "../api/User";

const TopWrapper = styled.div`
  width: 1410px;
  margin: 135px auto 135px;
`;

const FollowingPDSection = () => {
  // 팔로우한 셀러 상품
  const [followSellerItems, setFollowSellerItems] = useState([]);
  // 회원이름
  const [username, setUsername] = useState("");

  // 섹션 제목
  let title = `${username}님이 팔로우한 셀러의 상품 모아보기`;

  // 엑세스 토큰
  const { accessToken } = useSelector((state) => state.token);

  // 팔로우한 셀러 상품 조회
  const getFollowSellerItems = async (accessToken) => {
    try {
      const option = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const response = await axios.get(
        `https://hee-backend.shop:7179/product/follow/select`,
        option
      );
      const data = response.data.data;
      return data;
    } catch (error) {
      console.log("FollowingPDSection Error", error);
      return;
    }
  };

  const showFollowSellerItems = async () => {
    const data1 = await getFollowSellerItems(accessToken);
    // 회원이름 조회
    const data2 = await selectUserProfile(accessToken);
    setFollowSellerItems(data1);
    setUsername(data2.json.data.name);
  };

  useEffect(() => {
    showFollowSellerItems();
  }, [accessToken]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {followSellerItems ? (
        <TopWrapper>
          <TitleInHome title={title} />
          <ItemImages items={followSellerItems} />
        </TopWrapper>
      ) : null}
    </>
  );
};

export default FollowingPDSection;
