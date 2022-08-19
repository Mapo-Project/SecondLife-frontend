import styled from "styled-components";

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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
  margin-right: 49px;
`;

const DescriptionWrapper = styled.div`
  margin: 16px auto 0px;
  padding: 0px 30px 0px 30px;
  width: 393px;
  height: 129px;
  background-color: ${({ theme }) => theme.colors.black};
  border: 8px solid ${({ theme }) => theme.colors.green100};
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 15px;
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

const AfterPickupSubmit = () => {
  return (
    <>
      <BtnWrapper>
        <Button>신청내역 확인하기</Button>
      </BtnWrapper>

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
    </>
  );
};

export default AfterPickupSubmit;
