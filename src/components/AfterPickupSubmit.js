import { Link } from "react-router-dom";
import styled from "styled-components";

const TopWrapper = styled.div`
  margin-top: 24px;
`;

const CenterWrapper = styled.div`
  width: 100%;
  /* background-color: #fff; */
  position: relative;
  height: 362px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 123px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 14px;
  border-radius: 24px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.4px;
  cursor: pointer;
  margin-right: 22px;
`;

const DescriptionWrapper = styled.div`
  margin: 16px auto 0px;
  padding: 0px 32px;
  width: 393px;
  height: 145px;
  background-color: ${({ theme }) => theme.colors.black};
  border: 8px solid ${({ theme }) => theme.colors.green100};
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 25px;
    width: 12px;
    height: 12px;
    align-self: flex-start;
  }
`;

const Description = styled.div`
  p {
    color: ${({ theme }) => theme.colors.white};
    font-family: "Noto Sans KR";
    line-height: 24px;
  }
  p:nth-child(1) {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.15px;
  }
  p:nth-child(2) {
    color: ${({ theme }) => theme.colors.green300};
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.1px;
  }
  p:nth-child(3) {
    font-weight: 350;
    font-size: 12px;
    letter-spacing: 0.1px;
  }
`;

const Planet = styled.div`
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-position: center;
`;

const buttonMargin = { marginTop: "7px" };
const planetStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/pickUpImg/planet.png)`,
};

const AfterPickupSubmit = () => {
  return (
    <TopWrapper>
      <CenterWrapper>
        <Planet style={planetStyle} />
        <BtnWrapper>
          <Link to="/">
            <Button>홈으로 이동</Button>
          </Link>
          <Button style={buttonMargin}>신청내역 확인하기</Button>
        </BtnWrapper>
      </CenterWrapper>
      <DescriptionWrapper>
        <Description>
          <p>픽업신청이 완료되었습니다.</p>
          <p>예상 판매 시작 가능일 :10일</p>
          <p>
            예약하신 지정장소와 시간에 맞춰 옷을 담아주세요.
            <br />
            그린백은 픽업일 이전에 도착합니다.
          </p>
        </Description>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/icons/totop.png`}
          alt=""
        />
      </DescriptionWrapper>
    </TopWrapper>
  );
};

export default AfterPickupSubmit;
