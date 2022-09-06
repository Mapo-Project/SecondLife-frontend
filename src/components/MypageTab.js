import { useState } from "react";
import styled from "styled-components";
import MypageSale from "./MypageSale";
import MypagePurchase from "./MypagePurchase";
import MypageSold from "./MypageSold";

const ContentHeader = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;
const ContentTab = styled.div`
  display: flex;
  margin-top: 90px;

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 141px;
    height: 50px;
    border: 2px solid #000000;
    border-radius: 8px 8px 0 0;
    background: #e7e6e4;
    cursor: pointer;
  }
  .tab.active {
    background: white;
  }
  span {
    ${({ theme }) => theme.korean.subtitle1};
    color: ${({ theme }) => theme.colors.gray500};
  }
  span.active {
    color: ${({ theme }) => theme.colors.black};
  }
  .pick {
    color: black;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const MypageTab = () => {
  //탭 타이틀
  const tabTitle = ["구매한 상품", "판매 중인 상품", "판매 된 상품"];

  //탭에따른 컨텐츠 컴포넌트
  const TabContent = {
    0: <MypagePurchase />,
    1: <MypageSale />,
    2: <MypageSold />,
  };
  //탭 변경
  const [tabChange, setTabChange] = useState({ activeTab: 1 });
  //탭 클릭 핸들러
  const TabClickHandler = (e) => {
    setTabChange({ ...tabChange, activeTab: e });
  };
  return (
    <>
      <ContentHeader>
        <ContentTab>
          {tabTitle.map((a, i) => {
            return (
              <div
                className={tabChange.activeTab === i ? "tab active" : "tab"}
                key={i}
                onClick={() => {
                  TabClickHandler(i);
                }}
              >
                <span className={tabChange.activeTab === i ? "active" : ""}>
                  {a}
                </span>
              </div>
            );
          })}
        </ContentTab>
      </ContentHeader>
      {TabContent[tabChange.activeTab]}
    </>
  );
};

export default MypageTab;
