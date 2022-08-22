import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import styled from "styled-components";
import { followingListData } from "../utils/followingListData";
import TitleInHome from "./TitleInHome";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectUserProfile } from "../api/User";

const TopWrapper = styled.div`
  width: 1410px;
  height: 246px;
  margin: 135px auto 0;
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
    width: 17%;
    border: 33px solid transparent;
    /* border-radius: 33px; */
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

const FollowingList = () => {
  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  const [followingList, setFollowingList] = useState([]);
  const [username, setUsername] = useState("");

  let title = `${username}님이 팔로우한 셀러`;

  const { accessToken } = useSelector((state) => state.token);
  const { data } = useSelector((state) => state.user);

  const getUserFollowingList = async (accessToken) => {
    try {
      const option = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const response = await axios.get(
        `https://hee-backend.shop:7179/user/following/select`,
        option
      );
      const data = response.data.data;
      return data;
    } catch (error) {
      console.log("FollowingList Error", error);
    }
  };

  const showUserFollowingList = async () => {
    const data1 = await getUserFollowingList(accessToken);
    // const data2 = await selectUserProfile(accessToken);
    setFollowingList(data1);
    // setUsername(data2.json.data.name);
    setUsername(data.name);
  };

  useEffect(() => {
    showUserFollowingList();
  }, [accessToken]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {followingList ? (
        <TopWrapper>
          <TitleInHome title={title} />
          <ItemsWrapper className="items" {...events} ref={containerRef}>
            {followingList.map((datum) => (
              <ItemWrapper key={datum.following_user_id}>
                {parseInt(datum.product_count) > 0 && <Circle />}
                <Link to="/">
                  <img src={datum.profile_img} alt={datum.name} />
                  <h5>{datum.name}</h5>
                </Link>
              </ItemWrapper>
            ))}
          </ItemsWrapper>
        </TopWrapper>
      ) : null}
    </>
  );
};
export default FollowingList;
