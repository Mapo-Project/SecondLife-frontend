/* eslint-disable */
import { useState, useEffect } from "react";
import styled from "styled-components";
import TitleInHome from "./TitleInHome";
import axios from "axios";

const Section = styled.div`
  max-width: 1410px;
  /* display: flex;
  flex-direction: column; */
  margin-left: auto;
  margin-right: auto;
  .content {
    height: 392px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-bottom: 135px;
    img {
      width: 188px;
      height: 188px;
      /* margin-bottom: 15px; */
    }
  }
`;

const NewItemSection = () => {
  let title = "지금 막 등록된 NEW ITEM !";
  let [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("https://hee-backend.shop:7179/product/select/latest")
      .then((result) => {
        console.log(result.data);
        setTest(result.data.data);
        // console.log(test);
      })
      .catch(() => {
        // alert("조회실패");
      });
  }, []);

  return (
    <Section>
      <TitleInHome title={title} />
      <div className="content">
        {test.map((a, i) => {
          return (
            <div className="item" key={i}>
              <img src={test[i].product_img} alt="" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default NewItemSection;
