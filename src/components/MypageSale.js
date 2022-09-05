import styled from "styled-components";
import { useEffect, useState } from "react";
import { MypageSaleData } from "../utils/MypageSaledata";

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
  margin: 13px 80px 13px 0;
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

const Title = styled.p`
  ${({ theme }) => theme.korean.body1};
  margin-left: 41px;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  margin-top: 30px;
  span {
    margin-left: 11px;
  }
`;

const List = styled.div`
  margin: 0 72px 50px 63px;
  ul {
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
      border-bottom: 0.5px solid black;
    }
    .last-border {
      border-bottom: 2px solid black;
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
  margin-right: 80px;
  white-space: nowrap;
`;

const ItemButton = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${({ theme }) => theme.korean.overline};
  a:nth-child(2) {
    margin: 5px 0;
  }
  a:hover {
    font-size: 12.5px;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 9px;
  button:nth-child(2) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const MypageSale = () => {
  const [saleData] = useState(MypageSaleData);

  //등록 날짜만 추출
  const [saleYMD, setSaleYMD] = useState([]);

  //등록 날짜별 하단 테두리 위해서
  const [border, setBorder] = useState([]);

  useEffect(() => {
    let saleYMD = [];
    saleData.forEach((a) => {
      saleYMD.push(a.saleYMD);
      //날짜별 상품 개수 구하기
      //a: 콜백함수 , i: 초기값
      const saleYMDProduct = saleYMD.reduce((a, i) => {
        a[i] = (a[i] || 0) + 1;
        return a;
      }, {});
      //등록한 상품 누적 개수
      let cumulativeProduct = [];
      cumulativeProduct.push(Object.values(saleYMDProduct)[0] - 1); //초기값 추가
      Object.values(saleYMDProduct).reduce((a, i) => {
        cumulativeProduct.push(a + i - 1); //i값 위해 -1
        return a + i;
      });
      setBorder(cumulativeProduct);
      //등록날짜 중복제거
      const newSaleYMD = Array.from(new Set(saleYMD));
      setSaleYMD(newSaleYMD);
    });
  }, []);

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
    saleData.forEach((a) => idArray.push(a.id));
    setCheckItems(idArray);
  };

  //체크박스 전체선택 해제
  const AllCancelHandler = () => {
    // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
    setCheckItems([]);
  };
  return (
    <div>
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
              {saleYMD.map((arr, i) => {
                return (
                  <div key={arr}>
                    <Title>
                      {arr}
                      <span>등록된 상품</span>
                    </Title>
                    <ul>
                      {saleData.map((a, i) => {
                        return (
                          // eslint-disable-next-line react/jsx-no-useless-fragment
                          <div key={a.id}>
                            {arr === a.saleYMD ? (
                              <li key={a.id}>
                                <div className="item-check" key={a.id}>
                                  <input
                                    type="checkbox"
                                    id={a.id}
                                    onChange={(e) => {
                                      changeHandler(
                                        e.currentTarget.checked,
                                        a.id
                                      );
                                    }}
                                    checked={
                                      checkItems.includes(a.id) ? true : false
                                    }
                                  />
                                </div>
                                <ItemWrap
                                  className={
                                    border.includes(i)
                                      ? "last-border"
                                      : "middle-border"
                                  }
                                  name="count"
                                >
                                  <ItemImg key={i}>
                                    <a href="#">
                                      <img src={a.url} alt="url" />
                                    </a>
                                  </ItemImg>
                                  <Item>
                                    <ItemInfo>
                                      <p className="item-name">{a.name}</p>
                                      <span className="item-brand">
                                        {a.brand}
                                      </span>
                                      <span className="item-brand">
                                        {a.hashtag}
                                      </span>
                                      <ItemStatus>
                                        <Status>사이즈</Status>
                                        <StatusValue>{a.size}</StatusValue>
                                        <Status>상태</Status>
                                        <StatusValue>{a.state}</StatusValue>
                                        <Status>
                                          <img
                                            src={`${imgUrl}heart.png`}
                                            alt=""
                                          />
                                        </Status>
                                        <StatusValue>{a.likes}</StatusValue>
                                      </ItemStatus>
                                    </ItemInfo>
                                    <ItemPrice>
                                      <span>
                                        {a.price
                                          .toString()
                                          .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                          )}
                                        원
                                      </span>
                                    </ItemPrice>
                                    <ItemButton>
                                      <a href="">세일 등록하기</a>
                                      <a href="">포인트 전환하기</a>
                                      <a href="">재활용 전환하기</a>
                                    </ItemButton>
                                  </Item>
                                </ItemWrap>
                              </li>
                            ) : null}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </List>
          </CenterCenter>
        </ContentCenter>
        <ContentBottom>
          <Button>
            <p>선택 세일등록</p>
          </Button>
          <Button>
            <p>선택 포인트등록</p>
          </Button>
          <Button>
            <p>선택 재활용등록</p>
          </Button>
        </ContentBottom>
      </MypageContent>
    </div>
  );
};

export default MypageSale;