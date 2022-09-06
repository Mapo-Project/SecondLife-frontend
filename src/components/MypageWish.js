import styled from "styled-components";
import { useState } from "react";
import { MypageWishData } from "../utils/MypageWishData";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/Mypage/`;

const MypageContent = styled.div`
  /* background-color: pink; */
`;

const ContentCenter = styled.div`
  position: relative;
  top: -5.5px;
  height: 891px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  /* 스크롤바 설정*/
  .scroll::-webkit-scrollbar {
    width: 8px;
  }
  /* 스크롤바 막대 설정*/
  .scroll::-webkit-scrollbar-thumb {
    border: 7px solid #212121;
    border-radius: 8px;
  }
`;

const CenterHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 13px 80px 7px 0;
  button:nth-child(1) {
    margin-right: 7px;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  cursor: pointer;
  p {
    ${({ theme }) => theme.korean.overline2};
    color: ${({ theme }) => theme.colors.white};
    margin: 5px 10px;
  }
`;
const CenterCenter = styled.div`
  height: 820px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 10px;
  p {
    ${({ theme }) => theme.korean.headline7};
  }
  img {
    width: 22px;
    height: 20px;
    margin-top: 3px;
    margin-right: 11px;
  }
`;

const List = styled.div`
  margin: 0 68px 50px 68px;
  ul {
    .first {
      border-top: 2px solid #000000;
    }
    .last {
      border-bottom: 2px solid #000000;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 15px 0; */
    .item-check {
      margin-right: 23px;
      span {
      }
      input[type="checkbox"] {
        appearance: none;
        cursor: pointer;
        //체크 전 스타일
        width: 18px;
        height: 18px;
        border: 1px solid black;
        border-radius: 2px;
        //체크 후 스타일
        &:checked {
          border-color: transparent;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
          background-size: 160% 160%;
          background-position: center;
          background-repeat: no-repeat;
          background-color: black;
        }
      }
    }
    .middle-border {
      border-bottom: 1px solid black;
    }
  }
`;

const ItemWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 0;
  /* border-bottom: 0.5px solid #000000; */
`;
const ItemImg = styled.div`
  margin-right: 31px;
  img {
    width: 100px;
    height: 100px;
  }
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 103px; */
  width: 80%;
  .item-name {
    ${({ theme }) => theme.korean.headline7};
  }
  .item-brand {
    ${({ theme }) => theme.korean.button};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;
const ItemStatus = styled.div`
  ${({ theme }) => theme.korean.button3};
  /* color: red; */
  color: ${({ theme }) => theme.colors.gray700};
`;
const Status = styled.span`
  margin-right: 6px;
`;
const StatusValue = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  margin-right: 15px;
`;

const ItemPrice = styled.div`
  ${({ theme }) => theme.korean.headline7};
  white-space: nowrap;
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 9px;
  button:nth-child(1) {
    margin-right: 8px;
  }
`;

const MypageWish = () => {
  const { data } = useSelector((state) => state.user);

  const [wishData, setWishdata] = useState(MypageWishData);
  //li데이터의 갯수
  const saleLength = wishData.length - 1;

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  //개별 체크 핸들러
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      // 체크 해제
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  //체크박스 전체선택 핸들러
  const AllCheckHandler = () => {
    // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
    const idArray = [];
    wishData.forEach((a) => idArray.push(a.id));
    setCheckItems(idArray);
  };

  //체크박스 전체선택 해제
  const AllCancelHandler = () => {
    // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
    setCheckItems([]);
  };

  //API 호출(구현X)
  /* 
  const { accessToken } = useSelector((state) => state.token);

  const getWishList = async (accessToken) => {
    try {
      const option = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // Authorization: "Bearer " + accessToken,
        },
      };
      const response = await axios.get(
        `https://hee-backend.shop:7179/product/wish/select`,
        option
      );
      // console.log(response);
      const data = response.data.data;
      return data;
    } catch (error) {
      console.log("상품 찜 조회 error" + error);
      return;
    }
  };
  const showWishList = async () => {
    const accessData = await getWishList(accessToken);
    console.log(accessData);
    accessData.map((a, i) => {
      let copy = [...wishData];
      copy[i].product_id = accessData[i].product_id;
      copy[i].product_img = a.product_img;

      setWishdata(copy);
    });
  };

  useEffect(() => {
    showWishList();
  }, [accessToken]);
*/
  return (
    <>
      <Title>
        <img src={`${imgUrl}wishheart.png`} alt="wish" />
        <p>{data.name}님이 찜한 상품</p>
      </Title>
      <MypageContent>
        <ContentCenter>
          <CenterHeader>
            <Button
              onClick={() => {
                AllCheckHandler();
              }}
            >
              <p>전체선택</p>
            </Button>
            <Button
              onClick={() => {
                AllCancelHandler();
              }}
            >
              <p>선택 해제</p>
            </Button>
          </CenterHeader>
          <CenterCenter className="scroll">
            <List>
              <ul>
                {wishData.map((a, i) => {
                  return (
                    <li
                      key={i}
                      className={
                        i === 0 ? "first" : i === saleLength ? "last" : ""
                      }
                    >
                      <div className="item-check">
                        <input
                          type="checkbox"
                          id={a.id}
                          onChange={(e) => {
                            changeHandler(e.currentTarget.checked, a.id);
                            console.log(a.id);
                          }}
                          checked={checkItems.includes(a.id) ? true : false}
                        />
                      </div>
                      <ItemWrap
                        className={i === saleLength ? "" : "middle-border"}
                      >
                        <ItemImg key={i}>
                          <a href="#">
                            <img src={a.url} alt="url" />
                          </a>
                        </ItemImg>
                        <Item>
                          <ItemInfo>
                            <p className="item-name">{a.name}</p>
                            <span className="item-brand">{a.brand}</span>
                            <span className="item-brand">{a.hashtag}</span>
                            <ItemStatus>
                              <Status>사이즈</Status>
                              <StatusValue>{a.size}</StatusValue>
                              <Status>상태</Status>
                              <StatusValue>{a.state}</StatusValue>
                              {/* <Status>
                                <img src={`${imgUrl}heart.png`} alt="" />
                              </Status>
                              <StatusValue>{a.likes}</StatusValue> */}
                            </ItemStatus>
                          </ItemInfo>
                          <ItemPrice>
                            <span>
                              {a.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              원
                            </span>
                          </ItemPrice>
                        </Item>
                      </ItemWrap>
                    </li>
                  );
                })}
              </ul>
            </List>
          </CenterCenter>
        </ContentCenter>
        <ContentBottom>
          <Button>
            <p>선택상품 삭제</p>
          </Button>
          <Button>
            <p>장바구니</p>
          </Button>
        </ContentBottom>
      </MypageContent>
    </>
  );
};

export default MypageWish;
