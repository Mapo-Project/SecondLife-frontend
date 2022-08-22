/* eslint-disable */
import { useState, useEffect } from "react";
import styled from "styled-components";
import TitleInHome from "./TitleInHome";
import axios from "axios";

const Section = styled.div`
  max-width: 1410px;
  margin-top: 135px;
  margin-left: auto;
  margin-right: auto;
  .content {
    position: relative;
    height: 392px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    /* margin-bottom: 135px; */
    .info {
      position: absolute;
      width: 188px;
      height: 188px;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      cursor: pointer;
    }
    .info:hover {
      opacity: 1;
    }
    img {
      width: 188px;
      height: 188px;
      cursor: pointer;
    }
  }
`;
const Texts = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 16px;
  padding-top: 130px;
  color: ${({ theme }) => theme.colors.white};
  text-align: right;
  p:nth-child(1) {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
  p:nth-child(2) {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.15px;
  }
  span {
    font-size: 15px;
    line-height: 15px;
    margin-left: 4px;
  }
`;

const NewItemSection = () => {
  let title = "지금 막 등록된 NEW ITEM !";
  let [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("https://hee-backend.shop:7179/product/latest/select")
      .then((result) => {
        setTest(result.data.data);
        // console.log(result.data.data);
      })
      .catch(() => {
        alert("조회실패");
      });
  }, []);

  return (
    <Section>
      <TitleInHome title={title} />
      <div className="content">
        {test.map((a, i) => {
          return (
            <div className="item" key={i}>
              <div className="info">
                <Texts>
                  <p>{test[i].size}</p>
                  <p>
                    {test[i].price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>원</span>
                  </p>
                </Texts>
              </div>
              <img src={test[i].product_img} alt="" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default NewItemSection;
