import styled from "styled-components";

const MypageContent = styled.div`
  /* background-color: pink; */
`;

const ContentCenter = styled.div`
  position: relative;
  top: -3px;
  height: 891px;
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 8px;
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
const CenterHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  button:nth-child(1) {
    margin-right: 7px;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.black};

  border-radius: 8px;
  p {
    ${({ theme }) => theme.korean.overline2};
    color: ${({ theme }) => theme.colors.white};
    margin: 5px 10px;
  }
`;
const CenterCenter = styled.div`
  height: 840px;
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

const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 9px;
  button:nth-child(2) {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const MypageSale = () => {
  return (
    <div>
      <MypageContent>
        <ContentCenter>
          <CenterHeader>
            <Button>
              <p>전체선택</p>
            </Button>
            <Button>
              <p>선택 해제</p>
            </Button>
          </CenterHeader>
          <CenterCenter className="scroll">
            판매중인 상품 내역
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
          </CenterCenter>
        </ContentCenter>
        <ContentBottom>
          <Button>
            <p>선택 세일등록</p>
          </Button>
          <Button>
            <p>선택 포인트등록</p>
          </Button>
          <Button>
            <p>선택 재활용등록</p>
          </Button>
        </ContentBottom>
      </MypageContent>
    </div>
  );
};

export default MypageSale;
