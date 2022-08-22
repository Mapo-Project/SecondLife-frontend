import styled from "styled-components";
import { itemsData } from "../utils/itemsData";
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
  const [followSellerItems, setFollowSellerItems] = useState([]);
  const [username, setUsername] = useState("");

  // let user = "김뫄뫄";
  let title = `${username}님이 팔로우한 셀러의 상품 모아보기`;

  // store에 저장된 Access Token 정보를 받아 온다
  const { accessToken } = useSelector((state) => state.token);
  // const userData = useSelector((state) => state.user);

  // 백으로부터 받은 응답
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
    const data2 = await selectUserProfile(accessToken);
    setFollowSellerItems(data1);
    setUsername(data2.json.data.name);
    // setUsername(userData.data.name);
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
