/* eslint-disable */
import styled from "styled-components";
import BottomBanners from "./BottomBanner";
import Circle from "./Circle";
import BrandSection from "./BrandSection";
import NewItemSection from "./NewItemSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/`;

const Container = styled.div`
  max-height: 1920px;
  width: 100%;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 616px;
  border-top: 2px solid ${({ theme }) => theme.colors.gray300};
`;
const SectionTop = styled.div`
  max-width: 1410px;
  display: flex;
  height: 607px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`;
const FooterLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 130px;
  img {
    margin-bottom: 34px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
const Body1 = styled.p`
  height: 134.93px;
  ${({ theme }) => theme.english.body1};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 9px;
`;

const Button = styled.button`
  ${({ theme }) => theme.korean.headline6};
  color: #484848;
  width: 242px;
  height: 74px;
  background: #00ff85;
  border-radius: 100px;
  border: none;
  margin-right: 17.47px;
  .icon {
    margin-right: 21.35px;
  }
`;
const FooterRight = styled.div`
  display: flex;
  align-content: space-around;
  height: 100%;
`;
const FooterRight1 = styled.div`
  h6 {
    padding-right: 130px;
    margin-bottom: 31.12px;
    ${({ theme }) => theme.english.headline6};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: nowrap;
  }
  ul {
    margin-bottom: 7.03px;
    color: ${({ theme }) => theme.colors.gray900};
    li {
      margin-bottom: 15px;
      a {
        margin-right: 33.93px;
        ${({ theme }) => theme.korean.body2};
      }
      a:nth-child(4) {
        margin-right: 0px;
      }
    }
  }
`;
const SectionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 112px 0 112px;
  width: 100%;
  height: 142px;
  border-top: 1.40556px solid ${({ theme }) => theme.colors.gray500};
  a {
    ${({ theme }) => theme.english.body2};
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

const Footer = () => {
  return (
    <Container>
      <NewItemSection />
      <BrandSection />
      <BottomBanners />
      <FooterSection>
        <SectionTop>
          <FooterLeft>
            <img src={`${imgUrl}LOGO.png`} alt="" />
            <Body1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptate voluptates officia voluptatum harum eveniet
              <br />
            </Body1>
            <div>
              <Button>
                <FontAwesomeIcon icon={faGooglePlay} className="icon" />
                PlayStore
              </Button>
              <Button>
                <FontAwesomeIcon icon={faAppStoreIos} className="icon" />
                AppStore
              </Button>
            </div>
          </FooterLeft>
          <FooterRight>
            <FooterRight1>
              <h6 className="title">COMPANY</h6>
              <ul>
                <li>
                  <a>회사소개</a>
                </li>
                <li>
                  <a>인재채용</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
                <li>
                  <a>Blogs</a>
                </li>
              </ul>
            </FooterRight1>
            <FooterRight1>
              <h6 className="title">HELP CENTER</h6>
              <ul>
                <li>
                  <a>1:1 문의</a>
                </li>
                <li>
                  <a>마케팅 제휴 | 입점 문의</a>
                </li>
                <li>
                  <a>공지사항</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>고객의 소리</a>
                </li>
              </ul>
            </FooterRight1>
            <FooterRight1>
              <h6 className="title">CONTACT INFO</h6>
              <ul>
                <li>
                  <a>Phone:1234567890</a>
                </li>
                <li>
                  <a>Email:company@emai.com</a>
                </li>
                <li>
                  <a>Location:100 Samrt Street, LA, USA</a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </a>
                </li>
              </ul>
            </FooterRight1>
          </FooterRight>
        </SectionTop>
        <SectionBottom>
          <a href="#">© 2022 마청단 | All rights raserved</a>
          <a href="#">Created with love by 마청단</a>
        </SectionBottom>
      </FooterSection>
      <Circle />
    </Container>
  );
};
export default Footer;
