import styled from "styled-components";

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
const List = styled.div`
  ul {
    font-size: 100px;
  }
  li {
    font-size: 40px;
  }
`;

const MypagePurchase = () => {
  return (
    <Content>
      <ContentCenter className="scroll">
        구매한 상품 내역
        <List>
          <ul>
            리스트 1<li>111111</li>
            <li>222222</li>
            <li>333333</li>
            <li>444444</li>
            <li>55555</li>
            <li>66666</li>
            <li>77777</li>
            <li>888888</li>
          </ul>
          <ul>
            리스트 2<li>111111</li>
            <li>222222</li>
            <li>333333</li>
            <li>444444</li>
            <li>55555</li>
            <li>66666</li>
            <li>77777</li>
            <li>888888</li>
          </ul>
          <ul>
            리스트 3<li>111111</li>
            <li>222222</li>
            <li>333333</li>
            <li>444444</li>
            <li>55555</li>
            <li>66666</li>
            <li>77777</li>
            <li>888888</li>
          </ul>
        </List>
      </ContentCenter>
    </Content>
  );
};

export default MypagePurchase;
