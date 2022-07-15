/* eslint-disable */

import styled from "styled-components";
import TitleInHome from "./TitleInHome";
import { TopSellerSectiondata } from "../utils/TopSellerSectiondata";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const Section = styled.div`
  max-width: 1410px;
  margin-left: auto;
  margin-right: auto;
  background-color: pink;
  .container {
    display: inline-block;
    width: 100%;
    /* height: 366px; */
    overflow: scroll;
    scroll-margin-bottom: 0;
    white-space: nowrap;
    margin-bottom: 135px;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
  .box {
    display: inline-block;
    margin-right: 10px;
    position: relative;
    img {
      height: 100%;
    }
  }
  .box:nth-child(10) {
    margin-right: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    /* align-content: space-between; */
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.052) 0%,
        rgba(0, 0, 0, 0) 25.62%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 49.87%, #000000 100%);
    .top {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      margin-top: 30px;
      margin-bottom: 167px;
    }
    .top span:nth-child(2) {
      display: inline-block;
      ${({ theme }) => theme.korean.caption};
      color: ${({ theme }) => theme.colors.white};
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        ${({ theme }) => theme.english.headline2};
        color: ${({ theme }) => theme.colors.white};
        margin-right: 18px;
      }
      .bottomcontent {
        display: flex;
        flex-direction: column;
        .id {
          ${({ theme }) => theme.english.headline6};
          color: ${({ theme }) => theme.colors.white};
        }
        .body {
          ${({ theme }) => theme.english.body2};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
const ToggleBtn = styled.div`
  width: 76px;
  height: 28px;
  border-radius: 50px;
  padding: 4px;
  background: ${(props) =>
    !props.toggle ? "rgba(33, 33, 33, 0.6)" : "#00FF85"};

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (!props.toggle ? "0" : " 2px solid #000000")};
  cursor: pointer;
  span {
    ${({ theme }) => theme.english.body2};
    /* color: ${({ theme }) => theme.colors.white}; */
    color: ${(props) => (!props.toggle ? "white" : "black")};
  }
`;

const TopSellerSection = () => {
  let title = "이달의 탑 셀러";
  let [seller] = useState(TopSellerSectiondata);
  let [toggle, setToggle] = useState(false);

  const containerRef = useRef(null);
  const { events } = useDraggable(containerRef);

  const clickedFollow = (i) => {
    
    setToggle((prev) => !prev);
    (seller[i].no ===i ? "111": "222");
    
    console.log(i);
    console.log(seller[i].no);
  };

  return (
    <Section>
      <TitleInHome title={title} />
      <div className="container" {...events} ref={containerRef}>
        {seller.map((a, i) => {
          return (
            <div className="box" key={i}>
              <img src={seller[i].url} alt="" />
              <div className="content">
                <div className="top">
                  <ToggleBtn onClick={() => clickedFollow(i)} toggle={toggle}>
                    {/* <span>{seller[i].no == {i} ? "aa" : "bb"}</span> */}
                    <span>{!toggle ? "Following" : "Follow"}</span>
                  </ToggleBtn>

                  <span>{seller[i].HashTag}</span>
                </div>
                <div className="bottom">
                  <p>{i + 1}</p>
                  <div className="bottomcontent">
                    <span className="id">XXtnc:{seller[i].UserId}</span>
                    <i>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="icon"
                        color="white"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="icon"
                        color="white"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="icon"
                        color="white"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="icon"
                        color="white"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="icon"
                        color="white"
                      />
                    </i>
                    {/* <span>별</span> */}
                    <span className="body">10K followers</span>
                    <span className="body">84,397 SOLD</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default TopSellerSection;
