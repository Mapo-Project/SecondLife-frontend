import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { MypagePurchaseData } from "../utils/MypagePurchaseData";

const Content = styled.div`
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
const ContentCenter = styled.div`
  position: relative;
  top: -3px;
  height: 891px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Title = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    ${({ theme }) => theme.korean.headline7};
  }
  span {
    cursor: pointer;
    ${({ theme }) => theme.korean.overline};
  }
  .icon {
    margin-left: 5px;
  }
`;

const List = styled.div`
  /* background-color: aquamarine; */
  margin: 0 84px;
  ul {
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* padding: 15px 0; */
  }
`;
const Itemwrap = styled.div`
  width: 100%;
  margin-top: 5px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  span:nth-child(1) {
    ${({ theme }) => theme.korean.overline2};
    margin: 0 13px;
  }
  span:nth-child(2) {
    ${({ theme }) => theme.korean.caption};
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 0;
  /* border-top: 2px solid #000000; */
  border-bottom: 2px solid #000000;
  img {
    width: 70px;
    height: 70px;
    margin-right: 15px;
  }
`;
const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .product {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 30px;
    span:nth-child(1) {
      ${({ theme }) => theme.korean.subtitle1};
    }
    span:nth-child(2) {
      ${({ theme }) => theme.korean.body2};
      color: ${({ theme }) => theme.colors.gray700};
    }
  }
  .price {
    width: 130px;
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    align-items: center;
    span:nth-child(1) {
      ${({ theme }) => theme.korean.subtitle1};
    }
    span:nth-child(2) {
      ${({ theme }) => theme.korean.overline4};
    }
  }
  .state {
    white-space: nowrap;
    padding: 0 80px;
    ${({ theme }) => theme.korean.subtitle1};
  }
  .button {
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
  }
`;
const Header2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  p {
    ${({ theme }) => theme.korean.overline2};
  }
`;
const HeaderProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const YMD = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  span {
    ${({ theme }) => theme.korean.body2};
  }
`;
const Product = styled.div`
  width: 40%;
  display: flex;
`;
const InnerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span:nth-child(1) {
    ${({ theme }) => theme.korean.subtitle1};
  }
  span:nth-child(2) {
    ${({ theme }) => theme.korean.body2};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;
const OrderNo = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    ${({ theme }) => theme.korean.body2};
  }
`;
const OrderPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span:nth-child(1) {
    ${({ theme }) => theme.korean.subtitle1};
  }
  span:nth-child(2) {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 11px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

const MypagePurchase = () => {
  const [purchaseData] = useState(MypagePurchaseData);
  //배송중 데이터
  const [delivery, setDelivery] = useState([]);
  //배송완료 데이터
  const [delivered, setDelivered] = useState([]);

  useEffect(() => {
    const copyDelivery = [];
    const copyDelivered = [];
    purchaseData.forEach((a) => {
      if (a.state === "배송중") {
        copyDelivery.push(a);
        setDelivery(copyDelivery);
      }
      if (a.state === "배송완료") {
        copyDelivered.push(a);
        setDelivered(copyDelivered);
      }
    });
  }, []);

  return (
    <Content>
      <ContentCenter className="scroll">
        <List>
          <Title>
            <p>배송중인 상품</p>
          </Title>
          <ul>
            {delivery.map((a, i) => {
              return (
                <li key={i}>
                  <Itemwrap>
                    <Header>
                      <div>
                        <span>주문일</span>
                        <span>{a.purchaseYMD}</span>
                      </div>
                      <div>
                        <span>주문번호</span>
                        <span>{a.orderNo}</span>
                      </div>
                    </Header>
                    <Item>
                      <div>
                        <a href="#">
                          <img src={a.url} alt="url" />
                        </a>
                      </div>
                      <ItemInfo>
                        <div className="product">
                          <span>{a.name}외 8건</span>
                          <span>{a.brand}</span>
                        </div>
                        <div className="price">
                          <span>
                            {a.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </span>
                          <span>배송비무료</span>
                        </div>
                        <div className="state">{a.state}</div>
                        <div className="button">
                          <a href="#">배송 조회하기</a>
                          <a href="#">구매 확정하기</a>
                          <a href="#">취소/반품/환불</a>
                        </div>
                      </ItemInfo>
                    </Item>
                  </Itemwrap>
                </li>
              );
            })}
          </ul>
          <Title>
            <p>구매내역</p>
            <span>
              더보기
              <FontAwesomeIcon icon={faAngleRight} className="icon" />
            </span>
          </Title>
          <ul>
            <li>
              <Header2>
                <YMD>
                  <div>
                    <p>주문일</p>
                  </div>
                </YMD>
                <Product>
                  <HeaderProduct>
                    <p>상품</p>
                  </HeaderProduct>
                </Product>
                <OrderNo>
                  <p>주문번호</p>
                </OrderNo>
                <OrderPrice>
                  <p>결제금액</p>
                </OrderPrice>
              </Header2>
            </li>
            {delivered.map((a, i) => {
              return (
                <li key={i}>
                  <Itemwrap>
                    {/* <Item style={{ borderbottom: "1px solid black" }}> */}
                    <Item>
                      <YMD>
                        <span>{a.purchaseYMD}</span>
                      </YMD>
                      <Product>
                        <div>
                          <a href="#">
                            <img src={a.url} alt="url" />
                          </a>
                        </div>
                        <InnerProduct>
                          <span>{a.name}외 3건</span>
                          <span>{a.brand}</span>
                        </InnerProduct>
                      </Product>
                      <OrderNo>
                        <span>{a.orderNo}</span>
                      </OrderNo>
                      <OrderPrice>
                        <span>
                          {a.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          원
                        </span>
                        <span>{a.tool}</span>
                      </OrderPrice>
                    </Item>
                  </Itemwrap>
                </li>
              );
            })}
          </ul>
        </List>
      </ContentCenter>
    </Content>
  );
};

export default MypagePurchase;
