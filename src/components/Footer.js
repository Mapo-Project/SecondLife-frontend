/* eslint-disable */
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/icons/`;

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
  cursor: pointer;
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
    cursor: pointer;
  }
  ul {
    margin-bottom: 7.03px;
    color: ${({ theme }) => theme.colors.gray900};
    li {
      margin-bottom: 15px;
      margin-right: 33.93px;
      ${({ theme }) => theme.korean.body2};
      cursor: pointer;
      .SNS {
        margin-right: 30px;
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
      <FooterSection>
        <SectionTop>
          <FooterLeft>
            <img src={`${imgUrl}Logo.png`} alt="" />
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
                <li>회사소개</li>
                <li>인재채용</li>
                <li>Contact Us</li>
                <li>Blogs</li>
              </ul>
            </FooterRight1>
            <FooterRight1>
              <h6 className="title">HELP CENTER</h6>
              <ul>
                <li>1:1 문의</li>
                <li>마케팅 제휴 | 입점 문의</li>
                <li>공지사항</li>
                <li>FAQs</li>
                <li>고객의 소리</li>
              </ul>
            </FooterRight1>
            <FooterRight1>
              <h6 className="title">CONTACT INFO</h6>
              <ul>
                <li>Phone: 1234567890</li>
                <li>Email: company@email.com</li>
                <li>Location: 100 Smart Street, LA, USA</li>
                <li>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    size="3x"
                    className="SNS"
                  />
                  <FontAwesomeIcon icon={faTwitter} size="3x" className="SNS" />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    className="SNS"
                  />
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </li>
              </ul>
            </FooterRight1>
          </FooterRight>
        </SectionTop>
        <SectionBottom>
          <a href="#">© 2022 마청단 | All rights reserved</a>
          <a href="#">Created with love by 마청단</a>
        </SectionBottom>
      </FooterSection>
    </Container>
  );
};
export default Footer;
