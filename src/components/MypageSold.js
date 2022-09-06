import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MypageSoldData, Chart, SalesData } from "../utils/MypageSoldData";
import ReactApexChart from "react-apexcharts";

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
  top: -5.5px;
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
  /* background-color: lightgreen; */
  margin: 0 38px 50px 38px;
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
const Rate = styled.div`
  /* background-color: lightyellow; */
  margin-bottom: 67px;
`;
const SalesRate = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; */
  border: 2px solid #000000;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.15);
  border-radius: 22px;
`;
const SalesStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  .rate-button {
    height: 100%;
    justify-content: flex-end;
  }
`;
const StatusBox = styled.div`
  width: 100%;
  display: flex;
  .box-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000000;
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 10px 0;
    .box-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        ${({ theme }) => theme.korean.overline2};
        line-height: 24px;
      }
    }
    .box-inner.text {
      align-items: flex-start;
      padding-right: 50px;
      span {
        ${({ theme }) => theme.korean.overline3};
      }
    }
    img {
      margin-right: 5px;
    }
  }
  :nth-child(2) {
    margin: 0 20px;
  }
`;
const Button = styled.button`
  background: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  p {
    ${({ theme }) => theme.korean.overline2};
    color: ${({ theme }) => theme.colors.white};
    margin: 5px 10px;
  }
  :nth-child(1) {
    margin-right: 8px;
    background: ${({ theme }) => theme.colors.gray500};
  }
`;

//하단시작
const Itemwrap = styled.div`
  width: 100%;
  margin-top: 5px;
  .middle-border {
    border-bottom: 1px solid black;
  }
  .last-border {
    border-bottom: 2px solid black;
  }
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13px 0;
  img {
    width: 70px;
    height: 70px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;
const Header2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #000000;
  border-bottom: 2px solid #000000;
  background-color: ${({ theme }) => theme.colors.black};
  p {
    color: ${({ theme }) => theme.colors.white};
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

const MypageSold = () => {
  const [chart] = useState(Chart);
  const [soldData] = useState(MypageSoldData);
  const [salesData] = useState(SalesData);

  const unit = [
    { unit1: "원", unit2: "건", unit3: "원" },
    { unit1: "건", unit2: "건", unit3: "건" },
    { unit1: "건", unit2: "개", unit3: "" },
  ];

  const date = new Date(); //현재 날짜 및 시간
  const dateMonth = date.getMonth() + 1;
  //li데이터의 갯수
  const soldLength = soldData.length - 1;
  return (
    <Content>
      <ContentCenter className="scroll">
        <List>
          <Rate>
            <Title>
              <p>{dateMonth}월 판매율</p>
            </Title>
            <SalesRate>
              <ReactApexChart
                options={chart.options}
                series={chart.series}
                height={256}
              />
            </SalesRate>
            <SalesStatus>
              {salesData.map((a, i) => {
                return (
                  <StatusBox key={i}>
                    <div className="box-wrapper">
                      <div className="box-inner text">
                        <span>
                          <img src={a.data1icon} alt="" />
                          {a.data1}
                        </span>
                        <span>
                          <img src={a.data2icon} alt="" />
                          {a.data2}
                        </span>
                        <span>
                          <img src={a.data3icon} alt="" />
                          {a.data3}
                        </span>
                      </div>
                      <div className="box-inner">
                        <span>
                          {a.data1value
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          {unit[i].unit1}
                        </span>
                        <span>
                          {a.data2value}
                          {unit[i].unit2}
                        </span>
                        <span>
                          {a.data3value}
                          {unit[i].unit3}
                        </span>
                      </div>
                    </div>
                  </StatusBox>
                );
              })}
              <StatusBox className="rate-button">
                <Button>
                  <p>월별 판매율</p>
                </Button>
                <Button>
                  <p>년도별 판매율</p>
                </Button>
              </StatusBox>
            </SalesStatus>
          </Rate>
          {/* 판매상품내역시작 */}
          <Title>
            <p>판매 상품 내역</p>
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
                  <p>정산금액</p>
                </OrderPrice>
              </Header2>
            </li>
            {soldData.map((a, i) => {
              return (
                <li key={i}>
                  <Itemwrap>
                    <Item
                      className={
                        i === soldLength ? "last-border" : "middle-border"
                      }
                    >
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
                          <span>{a.name}</span>
                          <span>{a.product_state}</span>
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
                        <span>{a.price_state}</span>
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

export default MypageSold;
