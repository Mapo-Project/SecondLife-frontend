import styled from "styled-components";

const Content = styled.div``;
const ContentCenter = styled.div`
  position: relative;
  top: -3px;
  height: 891px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
`;

const MypageSold = () => {
  return (
    <Content>
      <ContentCenter>판매된 상품 내역</ContentCenter>
    </Content>
  );
};

export default MypageSold;
